import type { NeonChildProgressRecord } from './neonProgressService';
import { neonApiFetch } from './neonApiClient';

export interface ParentChildSnapshot {
  childId: string;
  progress: NeonChildProgressRecord | null;
  answered: number;
  correct: number;
  reviewDue: number;
  lastActivity: string | null;
}

export async function loadParentChildSnapshots(parentId: string): Promise<ParentChildSnapshot[]> {
  void parentId;
  const { snapshots } = await neonApiFetch<{ snapshots: Array<{
    child_id: string;
    xp: number;
    streak: number;
    mastery_levels: Record<string, unknown>;
    completed_quizzes: number;
    last_sync: string;
    answered: number;
    correct: number;
    review_due: number;
    last_activity: string | null;
  }> }>('/api/parent/dashboard');
  return snapshots.map((snapshot) => ({
    childId: snapshot.child_id,
    progress: {
      child_id: snapshot.child_id,
      xp: snapshot.xp || 0,
      streak: snapshot.streak || 0,
      mastery_levels: snapshot.mastery_levels || {},
      completed_quizzes: snapshot.completed_quizzes || 0,
      last_sync: snapshot.last_sync,
    },
    answered: snapshot.answered || 0,
    correct: snapshot.correct || 0,
    reviewDue: snapshot.review_due || 0,
    lastActivity: snapshot.last_activity,
  }));
}
