import { neon } from '@neondatabase/serverless';
import { createRemoteJWKSet, jwtVerify } from 'jose';

const db = () => neon(process.env.DATABASE_URL || '');
const jwks = () => process.env.NEON_AUTH_JWKS_URL ? createRemoteJWKSet(new URL(process.env.NEON_AUTH_JWKS_URL)) : null;

async function userId(req: any): Promise<string | null> {
  const auth = req.headers.authorization;
  const keys = jwks();
  if (!keys || !auth?.startsWith('Bearer ')) return null;
  try {
    const { payload } = await jwtVerify(auth.slice(7), keys);
    return typeof payload.sub === 'string' ? payload.sub : null;
  } catch {
    return null;
  }
}

function pathParts(req: any): string[] {
  const path = req.query?.path;
  return Array.isArray(path) ? path : typeof path === 'string' ? path.split('/') : [];
}

function unauthorized(res: any) { return res.status(401).json({ error: 'Authentification Neon requise.' }); }

export default async function handler(req: any, res: any) {
  const id = await userId(req);
  if (!id) return unauthorized(res);
  const parts = pathParts(req);

  try {
    if (parts[0] === 'profile' && req.method === 'PATCH') {
      const username = typeof req.body?.username === 'string' ? req.body.username.trim().slice(0, 80) : '';
      if (!username) return res.status(400).json({ error: 'Nom utilisateur invalide.' });
      await db()`INSERT INTO public.profiles (id, username) VALUES (${id}, ${username}) ON CONFLICT (id) DO UPDATE SET username = EXCLUDED.username, updated_at = NOW()`;
      return res.json({ ok: true });
    }

    if (parts[0] === 'progress') {
      if (req.method === 'GET') {
        const rows = await db()`SELECT child_id, xp, streak, mastery_levels, completed_quizzes, last_sync FROM public.children_progress WHERE child_id = ${id} LIMIT 1`;
        return res.json({ progress: rows[0] || null });
      }
      if (req.method === 'POST') {
        const stats = req.body?.stats;
        if (!stats || typeof stats !== 'object') return res.status(400).json({ error: 'Stats invalides.' });
        await db()`INSERT INTO public.profiles (id, username, xp, total_answered, correct_answers_count, streak, highest_streak, completed_quizzes_count, unlocked_badge_ids) VALUES (${id}, 'Explorateur', ${Number(stats.xp) || 0}, ${Number(stats.totalAnswered) || 0}, ${Number(stats.correctAnswersCount) || 0}, ${Number(stats.streak) || 0}, ${Number(stats.highestStreak) || 0}, ${Number(stats.completedQuizzesCount) || 0}, ${stats.unlockedBadgeIds || []}) ON CONFLICT (id) DO UPDATE SET xp=EXCLUDED.xp, total_answered=EXCLUDED.total_answered, correct_answers_count=EXCLUDED.correct_answers_count, streak=EXCLUDED.streak, highest_streak=EXCLUDED.highest_streak, completed_quizzes_count=EXCLUDED.completed_quizzes_count, unlocked_badge_ids=EXCLUDED.unlocked_badge_ids, updated_at=NOW()`;
        await db()`INSERT INTO public.children_progress (child_id, xp, streak, mastery_levels, completed_quizzes) VALUES (${id}, ${Number(stats.xp) || 0}, ${Number(stats.streak) || 0}, ${JSON.stringify(stats.masteryLevels || {})}::jsonb, ${Number(stats.completedQuizzesCount) || 0}) ON CONFLICT (child_id) DO UPDATE SET xp=EXCLUDED.xp, streak=EXCLUDED.streak, mastery_levels=EXCLUDED.mastery_levels, completed_quizzes=EXCLUDED.completed_quizzes, last_sync=NOW(), updated_at=NOW()`;
        const syncedEventIds: string[] = [];
        for (const event of Array.isArray(req.body?.events) ? req.body.events.slice(0, 100) : []) {
          if (!event?.id || !event.questionId || !['correct', 'incorrect'].includes(event.result)) continue;
          await db()`INSERT INTO public.learning_progress_events (id, child_id, question_id, category, result, response_time_ms, difficulty, attempts, last_reviewed_at, created_at) VALUES (${String(event.id)}, ${id}, ${String(event.questionId)}, ${String(event.category || 'general')}, ${event.result}, ${Math.max(0, Number(event.responseTimeMs) || 0)}, ${Math.min(5, Math.max(1, Number(event.difficulty) || 1))}, ${Math.max(1, Number(event.attempts) || 1)}, ${event.lastReviewedAt || null}, ${event.createdAt || new Date().toISOString()}) ON CONFLICT (id) DO NOTHING`;
          syncedEventIds.push(String(event.id));
        }
        return res.json({ syncedEventIds });
      }
    }

    if (parts[0] === 'parent' && parts[1] === 'dashboard' && req.method === 'GET') {
      const snapshots = await db()`SELECT l.child_id, p.xp, p.streak, p.mastery_levels, p.completed_quizzes, p.last_sync, COUNT(e.id)::int AS answered, COUNT(e.id) FILTER (WHERE e.result='correct')::int AS correct, COUNT(e.id) FILTER (WHERE e.result='incorrect')::int AS review_due, MAX(e.created_at) AS last_activity FROM public.parent_child_links l LEFT JOIN public.children_progress p ON p.child_id=l.child_id LEFT JOIN public.learning_progress_events e ON e.child_id=l.child_id WHERE l.parent_id=${id} GROUP BY l.child_id,p.xp,p.streak,p.mastery_levels,p.completed_quizzes,p.last_sync ORDER BY MAX(e.created_at) DESC NULLS LAST`;
      return res.json({ snapshots });
    }

    if (parts[0] === 'cms') {
      const contentId = parts[1];
      if (req.method === 'GET') {
        const records = await db()`SELECT * FROM public.pedagogical_content WHERE workflow='PUBLISHED' OR author_id=${id} ORDER BY updated_at DESC`;
        return res.json({ records });
      }
      if (req.method === 'POST' && !contentId) {
        const content = req.body?.content;
        if (!content?.id || !content.question) return res.status(400).json({ error: 'Contenu pédagogique invalide.' });
        const rows = await db()`INSERT INTO public.pedagogical_content (id,kind,payload,workflow,version,author_id) VALUES (${String(content.id)},'question',${JSON.stringify(content)}::jsonb,'DRAFT',1,${id}) RETURNING *`;
        return res.status(201).json({ record: rows[0] });
      }
      if (req.method === 'PATCH' && contentId && parts[2] !== 'transition') {
        const rows = await db()`UPDATE public.pedagogical_content SET payload=${JSON.stringify(req.body?.content)}::jsonb, updated_at=NOW(), version=version+1 WHERE id=${contentId} AND author_id=${id} RETURNING *`;
        return rows[0] ? res.json({ record: rows[0] }) : res.status(404).json({ error: 'Contenu introuvable.' });
      }
      if (req.method === 'POST' && contentId && parts[2] === 'transition') {
        const { from, to } = req.body || {};
        const allowed: Record<string, string[]> = { DRAFT: ['REVIEW'], REVIEW: ['DRAFT', 'VALIDATED'], VALIDATED: ['REVIEW', 'PUBLISHED'], PUBLISHED: ['ARCHIVED'], ARCHIVED: ['DRAFT'] };
        if (!allowed[from]?.includes(to)) return res.status(400).json({ error: 'Transition interdite.' });
        const rows = await db()`UPDATE public.pedagogical_content SET workflow=${to}, validator_id=CASE WHEN ${to} IN ('VALIDATED','PUBLISHED') THEN ${id} ELSE validator_id END, version=version+1, updated_at=NOW() WHERE id=${contentId} AND workflow=${from} AND (author_id=${id} OR ${to} IN ('VALIDATED','PUBLISHED')) RETURNING *`;
        if (!rows[0]) return res.status(403).json({ error: 'Transition non autorisée.' });
        await db()`INSERT INTO public.pedagogical_content_audit (content_id,from_workflow,to_workflow,actor_id) VALUES (${contentId},${from},${to},${id})`;
        return res.json({ record: rows[0] });
      }
    }

    if (parts[0] === 'oustaz' && parts[1] === 'chats') {
      const chatId = parts[2];
      if (req.method === 'GET' && !chatId) {
        const chats = await db()`SELECT id,title,updated_at,created_at FROM public.oustaz_chats WHERE user_id=${id} ORDER BY updated_at DESC`;
        return res.json({ chats });
      }
      if (req.method === 'GET' && parts[3] === 'messages') {
        const messages = await db()`SELECT m.role,m.content,m.created_at FROM public.oustaz_messages m JOIN public.oustaz_chats c ON c.id=m.chat_id WHERE m.chat_id=${chatId} AND c.user_id=${id} ORDER BY m.created_at ASC`;
        return res.json({ messages });
      }
      if (req.method === 'POST' && parts[3] === 'messages') {
        const { role, content, title } = req.body || {};
        if (!['user', 'model'].includes(role) || typeof content !== 'string' || !content.trim()) return res.status(400).json({ error: 'Message invalide.' });
        await db()`INSERT INTO public.oustaz_chats (id,user_id,title) VALUES (${chatId},${id},${String(title || content).slice(0,80)}) ON CONFLICT (id) DO UPDATE SET updated_at=NOW() WHERE public.oustaz_chats.user_id=${id}`;
        await db()`INSERT INTO public.oustaz_messages (chat_id,role,content) SELECT ${chatId},${role},${content} WHERE EXISTS (SELECT 1 FROM public.oustaz_chats WHERE id=${chatId} AND user_id=${id})`;
        return res.status(201).json({ ok: true });
      }
      if (req.method === 'PATCH' && chatId) {
        await db()`UPDATE public.oustaz_chats SET title=${String(req.body?.title || '').slice(0,80)},updated_at=NOW() WHERE id=${chatId} AND user_id=${id}`;
        return res.json({ ok: true });
      }
      if (req.method === 'DELETE' && parts[3] === 'messages') {
        await db()`DELETE FROM public.oustaz_messages WHERE chat_id=${chatId} AND EXISTS (SELECT 1 FROM public.oustaz_chats WHERE id=${chatId} AND user_id=${id})`;
        return res.json({ ok: true });
      }
      if (req.method === 'DELETE' && chatId) {
        await db()`DELETE FROM public.oustaz_chats WHERE id=${chatId} AND user_id=${id}`;
        return res.json({ ok: true });
      }
    }

    return res.status(404).json({ error: 'Route Neon introuvable.' });
  } catch (error) {
    console.error('Neon API error:', error);
    return res.status(500).json({ error: 'Erreur interne Neon.' });
  }
}
