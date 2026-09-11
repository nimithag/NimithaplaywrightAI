import { test, expect } from '@playwright/test';
 
test('mouse hover action', async ({ page }) => {
 
  // Launch the application
  await page.goto('https://demo.automationtesting.in/Register.html');
 
  const inr = page.getByText("Interactions ");
 
  await inr.hover()
 
  await page.waitForTimeout(3000)
 
  await page.getByText("Drag and Drop ").hover()
 
  await page.waitForTimeout(3000)
 
  //await page.locator('[href="Dynamic.html"]').hover()
 
  await page.locator("Static.html").click()
  
  await page.waitForTimeout(3000)
 
})
 