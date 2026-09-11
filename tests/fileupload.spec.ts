import { test, expect } from '@playwright/test';

test ('File Upload Example', async ({ page }) => {




await page.goto('https://automatewithbipin.in/?utm_source=chatgpt.com');

await page.waitForTimeout(3000)

await page.locator('#singleFile').setInputFiles("C:\\Users\\nimit\\Downloads\\Nimitha_Playwright.docx");



await page.waitForTimeout(3000)




})