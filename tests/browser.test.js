import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
  await page.goto('http://localhost:5500/');

  // keep browser open
  await page.pause();
});
