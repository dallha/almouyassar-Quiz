import { neonAuth } from '../neonAuthClient';
import type { UserStats } from '../types';
import { getUnsyncedProgressEvents, markProgressEventsSynced } from './progressRepository';

export interface NeonChildProgressRecord {
  child_id: string;
  xp: number;
  streak: number;
  mastery_levels: Record<string, unknown>;
  completed_quizzes: number;
  last_sync: string;
}

async function getAccessToken(): Promise<string | null> {
  const { data } = await neonAuth.getSession();
  return data.session?.access_token || null;
}

export async function syncChildProgressToNeon(childId: string, stats: UserStats): Promise<void> {
  const token = await getAccessToken();
  if (!token) return;
  const events = getUnsyncedProgressEvents(childId);
  const response = await fetch('/api/progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ stats, events }),
  });
  if (!response.ok) throw new Error('Synchronisation Neon impossible.');
  const result = await response.json() as { syncedEventIds?: string[] };
  if (result.syncedEventIds?.length) markProgressEventsSynced(childId, result.syncedEventIds);
}

export async function loadChildProgressFromNeon(): Promise<NeonChildProgressRecord | null> {
  const token = await getAccessToken();
  if (!token) return null;
  const response = await fetch('/api/progress', { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) return null;
  const result = await response.json() as { progress?: NeonChildProgressRecord | null };
  return result.progress || null;
}
