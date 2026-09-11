import { test, expect } from '@playwright/test';
 
test('Open URl', async ({ page }) => {
  await page.goto("https://www.facebook.com/")
});