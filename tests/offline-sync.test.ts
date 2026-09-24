import assert from 'node:assert/strict';
import test from 'node:test';

import { enqueueOffline, flushOfflineQueue, getOfflineQueue } from '../src/services/offlineSyncService';

class MemoryStorage {
  private values = new Map<string, string>();
  getItem(key: string) { return this.values.get(key) ?? null; }
  setItem(key: string, value: string) { this.values.set(key, value); }
  removeItem(key: string) { this.values.delete(key); }
}

test('offline queue keeps failed items and removes synced items', async () => {
  (globalThis as any).localStorage = new MemoryStorage();
  enqueueOffline('answer', { questionId: 'q1' });
  enqueueOffline('answer', { questionId: 'q2' });

  const result = await flushOfflineQueue(async (item) => {
    if ((item.payload as { questionId: string }).questionId === 'q2') throw new Error('offline');
  });

  assert.equal(result.synced, 1);
  assert.equal(result.failed, 1);
  assert.equal(getOfflineQueue()[0].attempts, 1);
});
