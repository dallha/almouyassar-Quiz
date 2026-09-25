import { supabase, isSupabaseConfigured } from '../supabaseClient';
import type { ChildProgressRecord } from './supabaseProgressService';

export interface ParentChildSnapshot {
  childId: string;
  progress: ChildProgressRecord | null;
  answered: number;
  correct: number;
  reviewDue: number;
  lastActivity: string | null;
}

export async function loadParentChildSnapshots(parentId: string): Promise<ParentChildSnapshot[]> {
  if (!isSupabaseConfigured()) return [];
  const { data: links, error: linkError } = await supabase
    .from('parent_child_links')
    .select('child_id')
    .eq('parent_id', parentId);
  if (linkError) throw linkError;

  const childIds = (links || []).map((link) => link.child_id as string);
  if (childIds.length === 0) return [];

  const [{ data: progressRows, error: progressError }, { data: events, error: eventsError }] = await Promise.all([
    supabase.from('children_progress').select('*').in('child_id', childIds),
    supabase.from('learning_progress_events').select('child_id, result, last_reviewed_at, created_at').in('child_id', childIds).order('created_at', { ascending: false }),
  ]);
  if (progressError) throw progressError;
  if (eventsError) throw eventsError;

  return childIds.map((childId) => {
    const childEvents = (events || []).filter((event) => event.child_id === childId);
    return {
      childId,
      progress: (progressRows || []).find((row) => row.child_id === childId) as ChildProgressRecord | null,
      answered: childEvents.length,
      correct: childEvents.filter((event) => event.result === 'correct').length,
      reviewDue: childEvents.filter((event) => event.result === 'incorrect').length,
      lastActivity: childEvents[0]?.created_at || null,
    };
  });
}
