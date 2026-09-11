import { test, expect } from '@playwright/test';
 
test('Select Date', async ({ page }) => {
 
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.waitForTimeout(3000)
 
  await page.locator("#dateOfBirthInput").fill("05 feb 2025")

  await page.waitForTimeout(3000)
 
})