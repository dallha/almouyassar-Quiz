-- Execute against a disposable Supabase test project with two auth users.
-- Replace the UUIDs before running. Do not run against production data.
-- This script must be executed by a role allowed to SET LOCAL request.jwt.claim.sub.

BEGIN;

-- Parent A can see Child A.
SET LOCAL ROLE authenticated;
SELECT set_config('request.jwt.claim.sub', '00000000-0000-0000-0000-0000000000a1', true);
SELECT child_id
FROM public.parent_child_links
WHERE parent_id = '00000000-0000-0000-0000-0000000000a1'
  AND child_id = '00000000-0000-0000-0000-0000000000c1';

SELECT child_id
FROM public.children_progress
WHERE child_id IN (
  '00000000-0000-0000-0000-0000000000c1',
  '00000000-0000-0000-0000-0000000000c2'
);

-- Expected result for parent A: only child C1 is returned.
-- A direct SELECT of C2 must return zero rows through RLS.

RESET ROLE;
ROLLBACK;

-- Required assertions to record in the test run:
-- 1. parent A -> child A: allowed
-- 2. parent A -> child B: zero rows
-- 3. child A cannot SELECT or UPDATE child B progress
-- 4. parent A cannot INSERT a progress event for child B
-- 5. published CMS content is readable; another author's draft is not
