import { test } from '@playwright/test'
 
test('Date picker', async ({ page }) => {
 
    // I want to open the test automation practice website
    await page.goto("https://testautomationpractice.blogspot.com/");
 
    const dp = page.locator("#datepicker");
 
    //await dp.scrollIntoViewIfNeeded()
 
    await dp.fill("02-02-2005")
 
    await page.keyboard.press("Tab")
 
    await page.waitForTimeout(2000)
 
    await page.keyboard.press("Tab")
 
    await page.waitForTimeout(2000)
 
    await page.keyboard.press("Tab")
 
})
 