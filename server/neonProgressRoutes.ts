import type { Express, NextFunction, Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';
import { createRemoteJWKSet, jwtVerify } from 'jose';

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
    if (!username) return res.status(400).json({ error: 'Nom utilisateur invalide.' });
    try {
      await db()`
        INSERT INTO public.profiles (id, username)
        VALUES (${res.locals.neonUserId}, ${username})
        ON CONFLICT (id) DO UPDATE SET username = EXCLUDED.username, updated_at = NOW()
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
      await db()`
        INSERT INTO public.profiles (
          id, username, xp, total_answered, correct_answers_count, streak,
          highest_streak, completed_quizzes_count, unlocked_badge_ids, updated_at
        ) VALUES (
          ${userId}, 'Explorateur', ${Number(stats.xp) || 0}, ${Number(stats.totalAnswered) || 0},
          ${Number(stats.correctAnswersCount) || 0}, ${Number(stats.streak) || 0},
          ${Number(stats.highestStreak) || 0}, ${Number(stats.completedQuizzesCount) || 0},
          ${stats.unlockedBadgeIds || []}, NOW()
        )
        ON CONFLICT (id) DO UPDATE SET
          xp = EXCLUDED.xp,
          total_answered = EXCLUDED.total_answered,
          correct_answers_count = EXCLUDED.correct_answers_count,
          streak = EXCLUDED.streak,
          highest_streak = EXCLUDED.highest_streak,
          completed_quizzes_count = EXCLUDED.completed_quizzes_count,
          unlocked_badge_ids = EXCLUDED.unlocked_badge_ids,
          updated_at = NOW()
      `;

      await db()`
        INSERT INTO public.children_progress (
          child_id, xp, streak, mastery_levels, completed_quizzes, last_sync, updated_at
        ) VALUES (
          ${userId}, ${Number(stats.xp) || 0}, ${Number(stats.streak) || 0},
          ${JSON.stringify(stats.masteryLevels || {})}::jsonb, ${Number(stats.completedQuizzesCount) || 0}, NOW(), NOW()
        )
        ON CONFLICT (child_id) DO UPDATE SET
          xp = EXCLUDED.xp,
          streak = EXCLUDED.streak,
          mastery_levels = EXCLUDED.mastery_levels,
          completed_quizzes = EXCLUDED.completed_quizzes,
          last_sync = NOW(),
          updated_at = NOW()
      `;

      const syncedEventIds: string[] = [];
      if (Array.isArray(events)) {
        for (const event of events.slice(0, 100)) {
          if (!event?.id || !event.questionId || !['correct', 'incorrect'].includes(event.result)) continue;
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
      }
      return res.json({ syncedEventIds });
    } catch (error) {
      console.error('Neon progress sync failed:', error);
      return res.status(500).json({ error: 'Synchronisation de la progression impossible.' });
    }
  });
}
