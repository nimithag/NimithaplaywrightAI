import { test, expect } from '@playwright/test';

async function openCheckout(page: Parameters<Parameters<typeof test>[1]>[0]['page']) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#shopping_cart_container').click();
  await page.locator('#checkout').click();
}

test('TC-001: checkout information page loads', async ({ page }) => {
  await openCheckout(page);
  await expect(page).toHaveURL(/checkout-step-one\.html/);
  await expect(page.locator('#first-name')).toBeVisible();
  await expect(page.locator('#last-name')).toBeVisible();
  await expect(page.locator('#postal-code')).toBeVisible();
  await expect(page.locator('#continue')).toBeVisible();
  await expect(page.locator('#cancel')).toBeVisible();
});

test('TC-002: valid checkout information continues', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#first-name').fill('Naveen');
  await page.locator('#last-name').fill('Kumar');
  await page.locator('#postal-code').fill('500075');
  await page.locator('#continue').click();
  await expect(page).toHaveURL(/checkout-step-two\.html/);
});

test('TC-003: all checkout fields are required', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#continue').click();
  await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

test('TC-004: last name is required', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#first-name').fill('Naveen');
  await page.locator('#postal-code').fill('500075');
  await page.locator('#continue').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');
});

test('TC-005: postal code is required', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#first-name').fill('Naveen');
  await page.locator('#last-name').fill('Kumar');
  await page.locator('#continue').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');
});

test('TC-006: whitespace-only values are handled consistently', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#first-name').fill('   ');
  await page.locator('#last-name').fill('   ');
  await page.locator('#postal-code').fill('   ');
  await page.locator('#continue').click();
  await expect(page).toHaveURL(/checkout-step-two\.html/);
});

test('TC-007: names with numbers and special characters are accepted by the form', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#first-name').fill('123!');
  await page.locator('#last-name').fill('@Test');
  await page.locator('#postal-code').fill('500075');
  await page.locator('#continue').click();
  await expect(page).toHaveURL(/checkout-step-two\.html/);
});

test('TC-008: long field values do not break checkout', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#first-name').fill('A'.repeat(100));
  await page.locator('#last-name').fill('B'.repeat(100));
  await page.locator('#postal-code').fill('500075');
  await page.locator('#continue').click();
  await expect(page).toHaveURL(/checkout-step-two\.html/);
});

test('TC-009: cancel returns to the cart', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#cancel').click();
  await expect(page).toHaveURL(/cart\.html/);
});

test('TC-010: entered values remain after validation error', async ({ page }) => {
  await openCheckout(page);
  await page.locator('#first-name').fill('Naveen');
  await page.locator('#postal-code').fill('500075');
  await page.locator('#continue').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');
  await expect(page.locator('#first-name')).toHaveValue('Naveen');
  await expect(page.locator('#postal-code')).toHaveValue('500075');
});