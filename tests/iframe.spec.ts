import { test, expect } from '@playwright/test';
 
test('Frames demo from demo.automationtesting.in', async ({ page }) => {
 
  // 1️⃣ Navigate to the application
  await page.goto('https://demo.automationtesting.in/Frames.html');

  await page.waitForTimeout(3000)

  
 
 
 await page.getByText("Single Iframe ").click()
 
 
 await page.frameLocator("#singleframe").locator('[type="text"]').fill("Ram")
 
 
})
 