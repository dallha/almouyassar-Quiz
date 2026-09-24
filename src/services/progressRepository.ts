import type { ReviewOutcome } from '../types/pedagogy';

export interface PersistedProgressEvent extends ReviewOutcome {
  id: string;
  childId: string;
  category: string;
  createdAt: string;
  synced: boolean;
}

const STORAGE_PREFIX = 'mouyassar_progress_events_v2:';

export function recordProgressEvent(event: Omit<PersistedProgressEvent, 'id' | 'createdAt' | 'synced'>): PersistedProgressEvent {
  const persisted: PersistedProgressEvent = {
    ...event,
    id: `${event.childId}:${event.questionId}:${Date.now()}`,
    createdAt: new Date().toISOString(),
    synced: false,
  };
  const existing = listProgressEvents(event.childId);
  localStorage.setItem(`${STORAGE_PREFIX}${event.childId}`, JSON.stringify([...existing, persisted]));
  return persisted;
}

export function listProgressEvents(childId: string): PersistedProgressEvent[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${childId}`);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function markProgressEventsSynced(childId: string, ids: string[]): void {
  const idSet = new Set(ids);
  const updated = listProgressEvents(childId).map((event) => idSet.has(event.id) ? { ...event, synced: true } : event);
  localStorage.setItem(`${STORAGE_PREFIX}${childId}`, JSON.stringify(updated));
}

export function getUnsyncedProgressEvents(childId: string): PersistedProgressEvent[] {
  return listProgressEvents(childId).filter((event) => !event.synced);
}
