import { test, expect } from '@playwright/test';
 
test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.waitForTimeout(5000)
})
 
// // // It will run after every test
test.afterEach(async ({ page }) => {
 
    await page.locator("#login-button").click()
    await page.waitForTimeout(5000)
 
})
 
//Before all
test.beforeAll(async () => {
 
    console.log("The testing is strated")
 
})
test.afterAll(async () => {
 
    console.log("The testing is Ended")
 
})
 
 
test('UserName1', async ({ page }) => {
 
    await page.getByPlaceholder('Username').fill('Naveen')
 
    await page.waitForTimeout(5000)
 
    console.log("UserName1 is tested")
 
})
 
test('UserName2', async ({ page }) => {
 
 
    await page.getByPlaceholder('Username').fill('Ram')
    console.log("UserName2 is tested")
 
    await page.waitForTimeout(5000)
})
test('UserName3', async ({ page }) => {
 
    await page.getByPlaceholder('Username').fill('Sridhar')
 
    await page.waitForTimeout(5000)
    console.log("UserName3 is tested")
 
})
test('UserName4', async ({ page }) => {
 
    await page.getByPlaceholder('Username').fill('Sai')
   
    console.log("UserName4 is tested")
 
    await page.waitForTimeout(5000)
 
})
 
 
 
