import type { Express } from 'express';
import { neon } from '@neondatabase/serverless';
import { requireNeonUser } from './neonProgressRoutes';

const db = () => neon(process.env.DATABASE_URL || '');

export function registerNeonOustazRoutes(app: Express): void {
  app.get('/api/oustaz/chats', requireNeonUser, async (_req, res) => {
    try {
      const chats = await db()`
        SELECT id, title, updated_at, created_at
        FROM public.oustaz_chats
        WHERE user_id = ${res.locals.neonUserId}
        ORDER BY updated_at DESC
      `;
      return res.json({ chats });
    } catch (error) {
      console.error('Neon Oustaz chats load failed:', error);
      return res.status(500).json({ error: 'Chargement des discussions impossible.' });
    }
  });

  app.get('/api/oustaz/chats/:id/messages', requireNeonUser, async (req, res) => {
    try {
      const messages = await db()`
        SELECT m.role, m.content, m.created_at
        FROM public.oustaz_messages m
        JOIN public.oustaz_chats c ON c.id = m.chat_id
        WHERE m.chat_id = ${req.params.id} AND c.user_id = ${res.locals.neonUserId}
        ORDER BY m.created_at ASC
      `;
      return res.json({ messages });
    } catch (error) {
      console.error('Neon Oustaz messages load failed:', error);
      return res.status(500).json({ error: 'Chargement des messages impossible.' });
    }
  });

  app.post('/api/oustaz/chats/:id/messages', requireNeonUser, async (req, res) => {
    const { role, content, title } = req.body || {};
    if (!['user', 'model'].includes(role) || typeof content !== 'string' || !content.trim()) {
      return res.status(400).json({ error: 'Message Oustaz invalide.' });
    }
    try {
      await db()`
        INSERT INTO public.oustaz_chats (id, user_id, title)
        VALUES (${req.params.id}, ${res.locals.neonUserId}, ${String(title || content).slice(0, 80)})
        ON CONFLICT (id) DO UPDATE SET updated_at = NOW()
        WHERE public.oustaz_chats.user_id = ${res.locals.neonUserId}
      `;
      await db()`
        INSERT INTO public.oustaz_messages (chat_id, role, content)
        SELECT ${req.params.id}, ${role}, ${content}
        WHERE EXISTS (
          SELECT 1 FROM public.oustaz_chats
          WHERE id = ${req.params.id} AND user_id = ${res.locals.neonUserId}
        )
      `;
      return res.status(201).json({ ok: true });
    } catch (error) {
      console.error('Neon Oustaz message save failed:', error);
      return res.status(500).json({ error: 'Sauvegarde du message impossible.' });
    }
  });

  app.patch('/api/oustaz/chats/:id', requireNeonUser, async (req, res) => {
    const title = typeof req.body?.title === 'string' ? req.body.title.trim().slice(0, 80) : '';
    if (!title) return res.status(400).json({ error: 'Titre invalide.' });
    await db()`
      UPDATE public.oustaz_chats SET title = ${title}, updated_at = NOW()
      WHERE id = ${req.params.id} AND user_id = ${res.locals.neonUserId}
    `;
    return res.json({ ok: true });
  });

  app.delete('/api/oustaz/chats/:id/messages', requireNeonUser, async (req, res) => {
    await db()`
      DELETE FROM public.oustaz_messages
      WHERE chat_id = ${req.params.id}
        AND EXISTS (SELECT 1 FROM public.oustaz_chats WHERE id = ${req.params.id} AND user_id = ${res.locals.neonUserId})
    `;
    return res.json({ ok: true });
  });

  app.delete('/api/oustaz/chats/:id', requireNeonUser, async (req, res) => {
    await db()`
      DELETE FROM public.oustaz_chats
      WHERE id = ${req.params.id} AND user_id = ${res.locals.neonUserId}
    `;
    return res.json({ ok: true });
  });
}
