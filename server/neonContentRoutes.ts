import type { Express } from 'express';
import { neon } from '@neondatabase/serverless';
import { requireNeonUser } from './neonProgressRoutes';

const db = () => neon(process.env.DATABASE_URL || '');
const transitions: Record<string, string[]> = {
  DRAFT: ['REVIEW'],
  REVIEW: ['DRAFT', 'VALIDATED'],
  VALIDATED: ['REVIEW', 'PUBLISHED'],
  PUBLISHED: ['ARCHIVED'],
  ARCHIVED: ['DRAFT'],
};

export function registerNeonContentRoutes(app: Express): void {
  app.get('/api/cms', requireNeonUser, async (req, res) => {
    try {
      const workflow = typeof req.query.workflow === 'string' ? req.query.workflow : null;
      const rows = workflow
        ? await db()`SELECT * FROM public.pedagogical_content WHERE workflow = ${workflow} OR author_id = ${res.locals.neonUserId} ORDER BY updated_at DESC`
        : await db()`SELECT * FROM public.pedagogical_content WHERE workflow = 'PUBLISHED' OR author_id = ${res.locals.neonUserId} ORDER BY updated_at DESC`;
      return res.json({ records: rows });
    } catch (error) {
      console.error('Neon CMS list failed:', error);
      return res.status(500).json({ error: 'Chargement du CMS impossible.' });
    }
  });

  app.post('/api/cms', requireNeonUser, async (req, res) => {
    const { content } = req.body || {};
    if (!content?.id || !content?.question) return res.status(400).json({ error: 'Contenu pédagogique invalide.' });
    try {
      const rows = await db()`
        INSERT INTO public.pedagogical_content (id, kind, payload, workflow, version, author_id)
        VALUES (${String(content.id)}, 'question', ${JSON.stringify(content)}::jsonb, 'DRAFT', 1, ${res.locals.neonUserId})
        RETURNING *
      `;
      return res.status(201).json({ record: rows[0] });
    } catch (error) {
      console.error('Neon CMS create failed:', error);
      return res.status(500).json({ error: 'Création CMS impossible.' });
    }
  });

  app.patch('/api/cms/:id', requireNeonUser, async (req, res) => {
    const { content } = req.body || {};
    if (!content?.question) return res.status(400).json({ error: 'Contenu pédagogique invalide.' });
    try {
      const rows = await db()`
        UPDATE public.pedagogical_content
        SET payload = ${JSON.stringify(content)}::jsonb, updated_at = NOW(), version = version + 1
        WHERE id = ${req.params.id} AND author_id = ${res.locals.neonUserId}
        RETURNING *
      `;
      if (!rows[0]) return res.status(404).json({ error: 'Contenu introuvable ou non autorisé.' });
      return res.json({ record: rows[0] });
    } catch (error) {
      console.error('Neon CMS update failed:', error);
      return res.status(500).json({ error: 'Modification CMS impossible.' });
    }
  });

  app.post('/api/cms/:id/transition', requireNeonUser, async (req, res) => {
    const { from, to } = req.body || {};
    if (!transitions[from]?.includes(to)) return res.status(400).json({ error: 'Transition éditoriale interdite.' });
    try {
      const rows = await db()`
        UPDATE public.pedagogical_content
        SET workflow = ${to}, validator_id = CASE WHEN ${to} IN ('VALIDATED', 'PUBLISHED') THEN ${res.locals.neonUserId} ELSE validator_id END,
            version = version + 1, updated_at = NOW()
        WHERE id = ${req.params.id} AND workflow = ${from}
          AND (author_id = ${res.locals.neonUserId} OR ${to} IN ('VALIDATED', 'PUBLISHED'))
        RETURNING *
      `;
      if (!rows[0]) return res.status(403).json({ error: 'Transition non autorisée.' });
      await db()`
        INSERT INTO public.pedagogical_content_audit (content_id, from_workflow, to_workflow, actor_id)
        VALUES (${req.params.id}, ${from}, ${to}, ${res.locals.neonUserId})
      `;
      return res.json({ record: rows[0] });
    } catch (error) {
      console.error('Neon CMS transition failed:', error);
      return res.status(500).json({ error: 'Transition CMS impossible.' });
    }
  });
}
