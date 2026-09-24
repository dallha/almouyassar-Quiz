-- Security Migration for Al Mouyassar Islamic Quiz
-- Run this in your Supabase SQL Editor to prevent Gamification Anti-cheat / IDOR.

-- Premium Feature V1: AI Semantic Search Readiness (Vector Database)
CREATE EXTENSION IF NOT EXISTS vector;

-- Uncomment this block once you have a 'questions' or 'knowledge_base' table to enable embeddings:
-- ALTER TABLE questions ADD COLUMN IF NOT EXISTS embedding vector(768);
-- CREATE INDEX ON questions USING hnsw (embedding vector_cosine_ops);

CREATE TABLE IF NOT EXISTS children_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  xp INT NOT NULL DEFAULT 0,
  streak INT NOT NULL DEFAULT 0,
  mastery_levels JSONB NOT NULL DEFAULT '{}'::jsonb,
  completed_quizzes INT NOT NULL DEFAULT 0,
  last_sync TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(child_id)
);

CREATE TABLE IF NOT EXISTS parent_child_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  child_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(parent_id, child_id),
  CHECK (parent_id <> child_id)
);

CREATE TABLE IF NOT EXISTS learning_progress_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  category TEXT NOT NULL,
  result TEXT NOT NULL CHECK (result IN ('correct', 'incorrect')),
  response_time_ms INT NOT NULL CHECK (response_time_ms >= 0),
  difficulty NUMERIC NOT NULL CHECK (difficulty >= 1 AND difficulty <= 5),
  attempts INT NOT NULL DEFAULT 1 CHECK (attempts >= 1),
  last_reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(child_id, question_id, created_at)
);

CREATE INDEX IF NOT EXISTS learning_progress_events_child_due_idx
  ON learning_progress_events(child_id, last_reviewed_at, result);

CREATE TABLE IF NOT EXISTS pedagogical_content (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('question', 'lesson', 'mission', 'badge', 'path')),
  payload JSONB NOT NULL,
  workflow TEXT NOT NULL CHECK (workflow IN ('DRAFT', 'REVIEW', 'VALIDATED', 'PUBLISHED', 'ARCHIVED')),
  version INT NOT NULL DEFAULT 1 CHECK (version >= 1),
  author_id UUID NOT NULL REFERENCES auth.users(id),
  validator_id UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS pedagogical_content_published_idx
  ON pedagogical_content(kind, workflow, updated_at DESC);

CREATE TABLE IF NOT EXISTS pedagogical_content_audit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id TEXT NOT NULL REFERENCES pedagogical_content(id) ON DELETE CASCADE,
  from_workflow TEXT,
  to_workflow TEXT NOT NULL,
  actor_id UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  properties JSONB NOT NULL DEFAULT '{}'::jsonb,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS analytics_events_name_time_idx
  ON analytics_events(name, occurred_at DESC);

ALTER TABLE parent_child_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_progress_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE pedagogical_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE pedagogical_content_audit ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "parent_child_links_select_own" ON parent_child_links
FOR SELECT
USING (auth.uid() = parent_id OR auth.uid() = child_id);

CREATE POLICY "parent_child_links_insert_own" ON parent_child_links
FOR INSERT
WITH CHECK (auth.uid() = parent_id);

CREATE POLICY "parent_child_links_update_own" ON parent_child_links
FOR UPDATE
USING (auth.uid() = parent_id)
WITH CHECK (auth.uid() = parent_id);

CREATE POLICY "parent_child_links_delete_own" ON parent_child_links
FOR DELETE
USING (auth.uid() = parent_id);

CREATE POLICY "progress_events_child_or_parent_select" ON learning_progress_events
FOR SELECT
USING (
  auth.uid() = child_id OR EXISTS (
    SELECT 1 FROM parent_child_links p
    WHERE p.parent_id = auth.uid() AND p.child_id = learning_progress_events.child_id
  )
);

CREATE POLICY "progress_events_child_insert" ON learning_progress_events
FOR INSERT
WITH CHECK (auth.uid() = child_id);

CREATE POLICY "content_published_select" ON pedagogical_content
FOR SELECT
USING (workflow = 'PUBLISHED' OR auth.uid() = author_id);

CREATE POLICY "content_author_write" ON pedagogical_content
FOR ALL
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

CREATE POLICY "content_audit_author_select" ON pedagogical_content_audit
FOR SELECT
USING (auth.uid() = actor_id OR EXISTS (
  SELECT 1 FROM pedagogical_content c
  WHERE c.id = pedagogical_content_audit.content_id AND c.author_id = auth.uid()
));

CREATE POLICY "analytics_child_or_parent_select" ON analytics_events
FOR SELECT
USING (
  auth.uid() = child_id OR EXISTS (
    SELECT 1 FROM parent_child_links p
    WHERE p.parent_id = auth.uid() AND p.child_id = analytics_events.child_id
  )
);

CREATE POLICY "analytics_child_insert" ON analytics_events
FOR INSERT
WITH CHECK (auth.uid() = child_id);

ALTER TABLE children_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "children_progress_select_own" ON children_progress
FOR SELECT
USING (auth.uid() = child_id);

CREATE POLICY "children_progress_select_parent" ON children_progress
FOR SELECT
USING (
  EXISTS (
    SELECT 1
    FROM parent_child_links p
    WHERE p.parent_id = auth.uid()
      AND p.child_id = children_progress.child_id
  )
);

CREATE POLICY "children_progress_insert_own" ON children_progress
FOR INSERT
WITH CHECK (auth.uid() = child_id);

CREATE POLICY "children_progress_update_own" ON children_progress
FOR UPDATE
USING (auth.uid() = child_id)
WITH CHECK (auth.uid() = child_id);

CREATE POLICY "children_progress_update_parent" ON children_progress
FOR UPDATE
USING (
  EXISTS (
    SELECT 1
    FROM parent_child_links p
    WHERE p.parent_id = auth.uid()
      AND p.child_id = children_progress.child_id
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM parent_child_links p
    WHERE p.parent_id = auth.uid()
      AND p.child_id = children_progress.child_id
  )
);

CREATE OR REPLACE FUNCTION update_user_stats_secure(
  new_xp INT,
  new_total_answered INT,
  new_correct INT,
  new_streak INT,
  new_highest_streak INT,
  new_completed INT,
  new_badges TEXT[]
) RETURNS void AS $$
DECLARE
  current_xp INT;
  xp_diff INT;
BEGIN
  -- We use auth.uid() so a user can ONLY update their own row.
  SELECT xp INTO current_xp FROM profiles WHERE id = auth.uid();
  
  xp_diff := new_xp - COALESCE(current_xp, 0);
  
  IF xp_diff > 1000 THEN
    RAISE EXCEPTION 'Anti-cheat violation: XP gain too high (%)', xp_diff;
  END IF;

  IF xp_diff < 0 AND new_xp != 0 THEN
    RAISE EXCEPTION 'Anti-cheat violation: Invalid XP reduction';
  END IF;

  UPDATE profiles
  SET
    xp = new_xp,
    total_answered = new_total_answered,
    correct_answers_count = new_correct,
    streak = new_streak,
    highest_streak = new_highest_streak,
    completed_quizzes_count = new_completed,
    unlocked_badge_ids = new_badges,
    updated_at = NOW()
  WHERE id = auth.uid();

  INSERT INTO children_progress (child_id, xp, streak, mastery_levels, completed_quizzes, last_sync)
  VALUES (
    auth.uid(),
    new_xp,
    new_streak,
    COALESCE((SELECT jsonb_object_agg(key, value) FROM jsonb_each('{}'::jsonb)), '{}'::jsonb),
    new_completed,
    NOW()
  )
  ON CONFLICT (child_id)
  DO UPDATE SET
    xp = EXCLUDED.xp,
    streak = EXCLUDED.streak,
    completed_quizzes = EXCLUDED.completed_quizzes,
    last_sync = NOW(),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
