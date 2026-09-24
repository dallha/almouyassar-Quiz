import { supabase, isSupabaseConfigured } from '../supabaseClient';
import type { UserStats } from '../types';
import { getUnsyncedProgressEvents, markProgressEventsSynced } from './progressRepository';

export interface ChildProgressRecord {
  id: string;
  child_id: string;
  xp: number;
  streak: number;
  mastery_levels: Record<string, number>;
  completed_quizzes: number;
  last_sync: string;
}

export async function syncChildProgressToSupabase(childId: string, stats: UserStats): Promise<void> {
  if (!isSupabaseConfigured()) return;

  const payload = {
    child_id: childId,
    xp: stats.xp,
    streak: stats.streak,
    mastery_levels: stats.masteryLevels,
    completed_quizzes: stats.completedQuizzesCount,
    last_sync: new Date().toISOString(),
  };

  const { error } = await supabase.from('children_progress').upsert(payload, { onConflict: 'child_id' });

  if (error) {
    console.error('Sync progress Supabase failed:', error);
    throw error;
  }
}

export async function loadChildProgressFromSupabase(childId: string): Promise<ChildProgressRecord | null> {
  if (!isSupabaseConfigured()) return null;

  const { data, error } = await supabase
    .from('children_progress')
    .select('*')
    .eq('child_id', childId)
    .maybeSingle();

  if (error) {
    console.error('Load progress Supabase failed:', error);
    return null;
  }

  return data as ChildProgressRecord | null;
}

export async function syncProgressEventsToSupabase(childId: string): Promise<void> {
  if (!isSupabaseConfigured()) return;
  const events = getUnsyncedProgressEvents(childId);
  if (events.length === 0) return;

  const { error } = await supabase.from('learning_progress_events').insert(events.map((event) => ({
    id: event.id,
    child_id: event.childId,
    question_id: event.questionId,
    category: event.category,
    result: event.result,
    response_time_ms: event.responseTimeMs,
    difficulty: event.difficulty,
    attempts: event.attempts,
    last_reviewed_at: event.lastReviewedAt,
    created_at: event.createdAt,
  })));

  if (error) throw error;
  markProgressEventsSynced(childId, events.map((event) => event.id));
}
