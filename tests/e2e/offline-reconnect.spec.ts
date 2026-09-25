import { expect, test } from '@playwright/test';

test('application remains available offline and preserves local progress events', async ({ page, context }) => {
  await page.goto('/');
  await expect(page.locator('body')).toContainText('Al-Mouyassar', { timeout: 15_000 });
  await page.evaluate(async () => {
    if ('serviceWorker' in navigator) await navigator.serviceWorker.ready;
  });
  await page.reload();
  await expect(page.locator('body')).toContainText('Al-Mouyassar', { timeout: 15_000 });

  await page.evaluate(() => {
    localStorage.setItem('mouyassar_progress_events_v2:local-child', JSON.stringify([{
      id: 'offline-event',
      childId: 'local-child',
      questionId: '1',
      category: 'Fiqh',
      result: 'incorrect',
      responseTimeMs: 9000,
      difficulty: 2,
      attempts: 1,
      createdAt: new Date().toISOString(),
      synced: false,
    }]));
  });

  await context.setOffline(true);
  await page.reload();
  await expect(page.locator('body')).toContainText('Al-Mouyassar', { timeout: 15_000 });
  await expect.poll(async () => page.evaluate(() => localStorage.getItem('mouyassar_progress_events_v2:local-child'))).toContain('offline-event');

  await context.setOffline(false);
  await expect(page.locator('body')).toContainText('Al-Mouyassar', { timeout: 15_000 });
});
