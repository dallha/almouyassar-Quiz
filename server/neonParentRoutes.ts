import type { Express } from 'express';
import { neon } from '@neondatabase/serverless';
import { requireNeonUser } from './neonProgressRoutes';

const db = () => neon(process.env.DATABASE_URL || '');

export function registerNeonParentRoutes(app: Express): void {
  app.get('/api/parent/dashboard', requireNeonUser, async (_req, res) => {
    try {
      const rows = await db()`
        SELECT
          l.child_id,
          p.xp,
          p.streak,
          p.mastery_levels,
          p.completed_quizzes,
          p.last_sync,
          COUNT(e.id)::int AS answered,
          COUNT(e.id) FILTER (WHERE e.result = 'correct')::int AS correct,
          COUNT(e.id) FILTER (WHERE e.result = 'incorrect')::int AS review_due,
          MAX(e.created_at) AS last_activity
        FROM public.parent_child_links l
        LEFT JOIN public.children_progress p ON p.child_id = l.child_id
        LEFT JOIN public.learning_progress_events e ON e.child_id = l.child_id
        WHERE l.parent_id = ${res.locals.neonUserId}
        GROUP BY l.child_id, p.xp, p.streak, p.mastery_levels, p.completed_quizzes, p.last_sync
        ORDER BY MAX(e.created_at) DESC NULLS LAST
      `;
      return res.json({ snapshots: rows });
    } catch (error) {
      console.error('Neon parent dashboard failed:', error);
      return res.status(500).json({ error: 'Chargement du dashboard parent impossible.' });
    }
  });
}
