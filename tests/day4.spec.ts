import { test, expect } from '@playwright/test';
 
 
test('Login1', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/');
 
  await page.getByRole('textbox',{name:'Username'}).fill("standard_user")
 
  await page.getByRole('textbox',{name:'Password'}).fill("secret_sauce")
 
  await page.getByRole('button',{name:'Login'}).screenshot({path:'kamal.png'})
 
  await page.waitForTimeout(4000)
 
 
 
});