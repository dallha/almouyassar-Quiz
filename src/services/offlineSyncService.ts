export interface SyncQueueItem<T = unknown> {
  id: string;
  type: string;
  payload: T;
  createdAt: string;
  attempts: number;
}

const QUEUE_KEY = 'mouyassar_sync_queue_v2';

function readQueue<T>(): SyncQueueItem<T>[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeQueue<T>(queue: SyncQueueItem<T>[]): void {
  if (typeof localStorage !== 'undefined') localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
}

export function enqueueOffline<T>(type: string, payload: T): SyncQueueItem<T> {
  const item: SyncQueueItem<T> = {
    id: `${type}:${Date.now()}:${Math.random().toString(36).slice(2)}`,
    type,
    payload,
    createdAt: new Date().toISOString(),
    attempts: 0,
  };
  writeQueue([...readQueue<T>(), item]);
  return item;
}

export function getOfflineQueue(): SyncQueueItem[] {
  return readQueue();
}

export async function flushOfflineQueue(
  send: (item: SyncQueueItem) => Promise<void>,
): Promise<{ synced: number; failed: number }> {
  const queue = readQueue();
  const remaining: SyncQueueItem[] = [];
  let synced = 0;

  for (const item of queue) {
    try {
      await send(item);
      synced += 1;
    } catch {
      remaining.push({ ...item, attempts: item.attempts + 1 });
    }
  }

  writeQueue(remaining);
  return { synced, failed: remaining.length };
}
