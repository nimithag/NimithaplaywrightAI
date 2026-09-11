import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/');
 
  //By id ---"#idvalue"
  await page.locator("#user-name").fill("sagar")
 
  //By Class----".classvalue"
  //await page.locator(".input_error form_input").fill("65656565")
 
  //By css selector --[AN='AV']  or Tagname[AN='AV']
 
  //await page.locator("input[name='login-button']").click()
 
  await page.locator('[data-test="login-button"]').click()
 
 
 
  await page.waitForTimeout(3000)
});
 