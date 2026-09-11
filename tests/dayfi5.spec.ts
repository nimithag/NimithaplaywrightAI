import { test, expect } from '@playwright/test';
 
test('Select Subject English', async ({ page }) => {
 
  // Open DemoQA form
  await page.goto('https://demoqa.com/automation-practice-form');
 
 
 
  const slp = page.locator("#subjectsInput")
 
  await slp.fill("eng")
 
  await page.keyboard.press("Enter")
 
  await page.waitForTimeout(4000)
 
  await page.keyboard.press('Tab')
 
})
 