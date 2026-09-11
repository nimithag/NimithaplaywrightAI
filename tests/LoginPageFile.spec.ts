import { test, expect } from '@playwright/test';
 
//      className             '../foldername/filename'

import { LoginPage } from '../Pages/LoginPage';
 
 
 
 
test('valid login', async ({ page }) => {
 
  //object_Formula ---const variable = new classname(page);
  const loginPage = new LoginPage(page);
 
  loginPage.gotourl()
  loginPage.VerifyUsername("standard_user","secret_sauce")
 
  await page.waitForTimeout(3000)
 
});
test('valid username and invaild password', async ({ page }) => {
 
  //object_Formula ---const variable = new classname(page);
  const loginPage = new LoginPage(page);
 
  loginPage.gotourl()
  loginPage.VerifyUsername("standard_user","656689968")
 
  await page.waitForTimeout(3000)
 
});
test('invalid username and vaild password', async ({ page }) => {
 
  //object_Formula ---const variable = new classname(page);
  const loginPage = new LoginPage(page);
 
  loginPage.gotourl()
  loginPage.VerifyUsername("sai","secret_sauce")
 
  await page.waitForTimeout(3000)
 
});
test('Both Inviald', async ({ page }) => {
 
  //object_Formula ---const variable = new classname(page);
  const loginPage = new LoginPage(page);
 
  loginPage.gotourl()
  loginPage.VerifyUsername("sai","56586865")
 
  await page.waitForTimeout(3000)
 
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 