import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/');
 
  await page.getByRole('textbox', { name: "Username" }).fill("standard_user")
 
  await page.getByPlaceholder("Password").fill("secret_sauce")
 
  await page.locator("#login-button").click()
 
  await page.waitForTimeout(4000)
 
  await page.locator("#add-to-cart-sauce-labs-backpack").click()
 
  await page.waitForTimeout(3000)
 
  await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click()
 
  await page.waitForTimeout(3000)
 
  await page.locator("#shopping_cart_container").click()
 
  await page.waitForTimeout(3000)
 
  await page.getByRole('button', { name: 'Checkout' }).click()
 
  await page.getByRole('textbox', { name: 'First Name' }).fill("Naveen")
 
 
  await page.getByRole('textbox', { name: 'Last Name' }).fill("Kumar")
 
 
 
  await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill("500075")
 
  await page.getByRole('button', { name: 'Continue' }).click()
 
 
 
  await page.getByRole('button', { name: 'Finish' }).click()
 
  await page.waitForTimeout(3000)
 
  await page.locator("#generate-pdf-order").click()
 
  await page.waitForTimeout(10000)
 
});
 