import { test, expect } from '@playwright/test';
 
test('Dropdown validation', async ({ page }) => {
 
 
  //For Maximize the window
  //  await page.setViewportSize({ width: 1920, height: 1080 });
 
  //await page.setViewportSize({width:1920,height:1080});
 
 
  // Step 1: Open application
  await page.goto('https://testautomationpractice.blogspot.com/');
 
  const cn = page.locator("#country");
 
  //For scrolling
  await cn.scrollIntoViewIfNeeded();
 
  //await cn.selectOption("India")
 
  await cn.selectOption({ index: 5 })
 
  await page.waitForTimeout(3000)
 
 
})
 