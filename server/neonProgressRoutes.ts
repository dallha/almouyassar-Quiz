import type { Express, NextFunction, Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { validateAndCalculateProgressBatch, type ProgressEventPayload } from './neonXpSecurity';

const db = () => neon(process.env.DATABASE_URL || '');
const getJwks = () => process.env.NEON_AUTH_JWKS_URL
  ? createRemoteJWKSet(new URL(process.env.NEON_AUTH_JWKS_URL))
  : null;

export async function getNeonUserId(req: Request): Promise<string | null> {
  const authorization = req.headers.authorization;
  const jwks = getJwks();
  if (!jwks || !authorization?.startsWith('Bearer ')) return null;
  try {
    const { payload } = await jwtVerify(authorization.slice('Bearer '.length), jwks);
    return typeof payload.sub === 'string' ? payload.sub : null;
  } catch {
    return null;
  }
}

export async function requireNeonUser(req: Request, res: Response, next: NextFunction) {
  const userId = await getNeonUserId(req);
  if (!userId) return res.status(401).json({ error: 'Authentification Neon requise.' });
  res.locals.neonUserId = userId;
  return next();
}

export function registerNeonProgressRoutes(app: Express): void {
  app.patch('/api/profile', requireNeonUser, async (req, res) => {
    const username = typeof req.body?.username === 'string' ? req.body.username.trim().slice(0, 80) : '';
    const avatarUrl = typeof req.body?.avatar_url === 'string' ? req.body.avatar_url.trim().slice(0, 500) : null;
    if (!username && !avatarUrl) return res.status(400).json({ error: 'Données de profil invalides.' });
    try {
      await db()`
        INSERT INTO public.profiles (id, username, avatar_url)
        VALUES (${res.locals.neonUserId}, ${username || 'Explorateur'}, ${avatarUrl})
        ON CONFLICT (id) DO UPDATE SET 
          username = COALESCE(NULLIF(${username}, ''), public.profiles.username),
          avatar_url = COALESCE(${avatarUrl}, public.profiles.avatar_url),
          updated_at = NOW()
      `;
      return res.json({ ok: true });
    } catch (error) {
      console.error('Neon profile update failed:', error);
      return res.status(500).json({ error: 'Mise à jour du profil impossible.' });
    }
  });

  app.get('/api/progress', requireNeonUser, async (_req, res) => {
    try {
      const rows = await db()`
        SELECT child_id, xp, streak, mastery_levels, completed_quizzes, last_sync
        FROM public.children_progress
        WHERE child_id = ${res.locals.neonUserId}
        LIMIT 1
      `;
      return res.json({ progress: rows[0] || null });
    } catch (error) {
      console.error('Neon progress load failed:', error);
      return res.status(500).json({ error: 'Chargement de la progression impossible.' });
    }
  });

  app.post('/api/progress', requireNeonUser, async (req, res) => {
    const { stats, events } = req.body || {};
    if (!stats || typeof stats !== 'object') return res.status(400).json({ error: 'Stats invalides.' });

    const userId = res.locals.neonUserId as string;
    try {
      // 1. Lire les XP actuellement stockés pour cet utilisateur
      const existingProfile = await db()`
        SELECT xp FROM public.profiles WHERE id = ${userId} LIMIT 1
      `;
      const currentDbXp = Number(existingProfile[0]?.xp) || 0;

      // 2. Traiter les événements et calculer autoritairement le gain XP légitime
      const rawEvents: ProgressEventPayload[] = Array.isArray(events) ? events.slice(0, 100) : [];
      const batch = validateAndCalculateProgressBatch(
        Number(stats.xp) || 0,
        currentDbXp,
        rawEvents
      );

      if (batch.isSuspicious) {
        console.warn(`[SECURITY][XP_AUDIT] Discrepancy detected for user ${userId}: ${batch.suspiciousReason}`);
      }

      // XP autoritaire : base actuelle + gain validé par les événements
      // Si premier enregistrement et base = 0, on borne à la valeur calculée
      const authorizedXp = currentDbXp > 0
        ? currentDbXp + batch.legitimateDeltaXp
        : Math.min(Number(stats.xp) || 0, batch.legitimateDeltaXp + 50);

      // 3. Insertion des événements avec protection anti-rejeu (ON CONFLICT DO NOTHING)
      const syncedEventIds: string[] = [];
      for (const event of batch.validEvents) {
        await db()`
          INSERT INTO public.learning_progress_events (
            id, child_id, question_id, category, result, response_time_ms,
            difficulty, attempts, last_reviewed_at, created_at
          ) VALUES (
            ${String(event.id)}, ${userId}, ${String(event.questionId)}, ${String(event.category || 'general')},
            ${event.result}, ${Math.max(0, Number(event.responseTimeMs) || 0)},
            ${Math.min(5, Math.max(1, Number(event.difficulty) || 1))}, ${Math.max(1, Number(event.attempts) || 1)},
            ${event.lastReviewedAt || null}, ${event.createdAt || new Date().toISOString()}
          ) ON CONFLICT (id) DO NOTHING
        `;
        syncedEventIds.push(String(event.id));
      }

      // 4. Mise à jour atomique des profils avec les XP vérifiés
      await db()`
        INSERT INTO public.profiles (
          id, username, xp, total_answered, correct_answers_count, streak,
          highest_streak, completed_quizzes_count, unlocked_badge_ids, updated_at
        ) VALUES (
          ${userId}, 'Explorateur', ${authorizedXp}, ${Number(stats.totalAnswered) || 0},
          ${Number(stats.correctAnswersCount) || 0}, ${Number(stats.streak) || 0},
          ${Number(stats.highestStreak) || 0}, ${Number(stats.completedQuizzesCount) || 0},
          ${stats.unlockedBadgeIds || []}, NOW()
        )
        ON CONFLICT (id) DO UPDATE SET
          xp = ${authorizedXp},
          total_answered = GREATEST(profiles.total_answered, EXCLUDED.total_answered),
          correct_answers_count = GREATEST(profiles.correct_answers_count, EXCLUDED.correct_answers_count),
          streak = EXCLUDED.streak,
          highest_streak = GREATEST(profiles.highest_streak, EXCLUDED.highest_streak),
          completed_quizzes_count = GREATEST(profiles.completed_quizzes_count, EXCLUDED.completed_quizzes_count),
          unlocked_badge_ids = EXCLUDED.unlocked_badge_ids,
          updated_at = NOW()
      `;

      await db()`
        INSERT INTO public.children_progress (
          child_id, xp, streak, mastery_levels, completed_quizzes, last_sync, updated_at
        ) VALUES (
          ${userId}, ${authorizedXp}, ${Number(stats.streak) || 0},
          ${JSON.stringify(stats.masteryLevels || {})}::jsonb, ${Number(stats.completedQuizzesCount) || 0}, NOW(), NOW()
        )
        ON CONFLICT (child_id) DO UPDATE SET
          xp = ${authorizedXp},
          streak = EXCLUDED.streak,
          mastery_levels = EXCLUDED.mastery_levels,
          completed_quizzes = GREATEST(children_progress.completed_quizzes, EXCLUDED.completed_quizzes),
          last_sync = NOW(),
          updated_at = NOW()
      `;

      return res.json({ syncedEventIds, verifiedXp: authorizedXp });
    } catch (error) {
      console.error('Neon progress sync failed:', error);
      return res.status(500).json({ error: 'Synchronisation de la progression impossible.' });
    }
  });
}
