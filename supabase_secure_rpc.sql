-- Security Migration for Al Mouyassar Islamic Quiz
-- Run this in your Supabase SQL Editor to prevent Gamification Anti-cheat / IDOR.

-- Premium Feature V1: AI Semantic Search Readiness (Vector Database)
CREATE EXTENSION IF NOT EXISTS vector;

-- Uncomment this block once you have a 'questions' or 'knowledge_base' table to enable embeddings:
-- ALTER TABLE questions ADD COLUMN IF NOT EXISTS embedding vector(768);
-- CREATE INDEX ON questions USING hnsw (embedding vector_cosine_ops);

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
  
  -- Anti-cheat check: limit the maximum XP that can be gained in a single sync
  -- Adjust the 1000 value based on your actual game mechanics.
  xp_diff := new_xp - COALESCE(current_xp, 0);
  
  IF xp_diff > 1000 THEN
    RAISE EXCEPTION 'Anti-cheat violation: XP gain too high (%)', xp_diff;
  END IF;

  -- Also prevent arbitrary XP reduction (unless it's a reset to 0)
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
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
