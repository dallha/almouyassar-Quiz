-- Application schema for Neon Managed Auth.
-- Authenticated identities live in neon_auth."user".

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES neon_auth."user"(id) ON DELETE CASCADE,
  username TEXT NOT NULL DEFAULT 'Explorateur',
  xp INTEGER NOT NULL DEFAULT 0 CHECK (xp >= 0),
  total_answered INTEGER NOT NULL DEFAULT 0 CHECK (total_answered >= 0),
  correct_answers_count INTEGER NOT NULL DEFAULT 0 CHECK (correct_answers_count >= 0),
  streak INTEGER NOT NULL DEFAULT 0 CHECK (streak >= 0),
  highest_streak INTEGER NOT NULL DEFAULT 0 CHECK (highest_streak >= 0),
  completed_quizzes_count INTEGER NOT NULL DEFAULT 0 CHECK (completed_quizzes_count >= 0),
  unlocked_badge_ids TEXT[] NOT NULL DEFAULT '{}',
  adventure_state JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.children_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID NOT NULL REFERENCES neon_auth."user"(id) ON DELETE CASCADE,
  xp INTEGER NOT NULL DEFAULT 0 CHECK (xp >= 0),
  streak INTEGER NOT NULL DEFAULT 0 CHECK (streak >= 0),
  mastery_levels JSONB NOT NULL DEFAULT '{}'::jsonb,
  completed_quizzes INTEGER NOT NULL DEFAULT 0 CHECK (completed_quizzes >= 0),
  last_sync TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(child_id)
);

CREATE TABLE IF NOT EXISTS public.parent_child_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES neon_auth."user"(id) ON DELETE CASCADE,
  child_id UUID NOT NULL REFERENCES neon_auth."user"(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(parent_id, child_id),
  CHECK (parent_id <> child_id)
);

CREATE TABLE IF NOT EXISTS public.learning_progress_events (
  id TEXT PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES neon_auth."user"(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  category TEXT NOT NULL,
  result TEXT NOT NULL CHECK (result IN ('correct', 'incorrect')),
  response_time_ms INTEGER NOT NULL CHECK (response_time_ms >= 0),
  difficulty NUMERIC NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
  attempts INTEGER NOT NULL DEFAULT 1 CHECK (attempts >= 1),
  last_reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS learning_progress_events_child_idx
  ON public.learning_progress_events(child_id, created_at DESC);

CREATE TABLE IF NOT EXISTS public.pedagogical_content (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('question', 'lesson', 'mission', 'badge', 'path')),
  payload JSONB NOT NULL,
  workflow TEXT NOT NULL CHECK (workflow IN ('DRAFT', 'REVIEW', 'VALIDATED', 'PUBLISHED', 'ARCHIVED')),
  version INTEGER NOT NULL DEFAULT 1 CHECK (version >= 1),
  author_id UUID NOT NULL REFERENCES neon_auth."user"(id),
  validator_id UUID REFERENCES neon_auth."user"(id),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS pedagogical_content_published_idx
  ON public.pedagogical_content(kind, workflow, updated_at DESC);

CREATE TABLE IF NOT EXISTS public.pedagogical_content_audit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id TEXT NOT NULL REFERENCES public.pedagogical_content(id) ON DELETE CASCADE,
  from_workflow TEXT,
  to_workflow TEXT NOT NULL,
  actor_id UUID NOT NULL REFERENCES neon_auth."user"(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.analytics_events (
  id TEXT PRIMARY KEY,
  child_id UUID REFERENCES neon_auth."user"(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  properties JSONB NOT NULL DEFAULT '{}'::jsonb,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.oustaz_chats (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES neon_auth."user"(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.oustaz_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chat_id TEXT NOT NULL REFERENCES public.oustaz_chats(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'model')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS oustaz_messages_chat_idx
  ON public.oustaz_messages(chat_id, created_at);
