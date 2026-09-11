# Sauce Demo Test Plan

## Application Overview

Functional test plan for Sauce Demo at https://www.saucedemo.com/. The plan covers authentication, inventory browsing, cart behavior, checkout validation and completion, session logout, and representative negative or boundary cases. Each scenario assumes a fresh browser context and is independent of the others.

## Test Scenarios

### 1. Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with a standard user

**File:** `tests/saucedemo/authentication-standard-login.spec.ts`

**Steps:**
  1. Start from a fresh browser context at https://www.saucedemo.com/.
    - expect: The login page is displayed with username, password, and login controls.
  2. Enter `standard_user` in the username field.
    - expect: The username field contains the entered value.
  3. Enter `secret_sauce` in the password field.
    - expect: The password field accepts the value without displaying it in plain text.
  4. Activate the Login button.
    - expect: The user is authenticated and redirected to the inventory page.
    - expect: The inventory page shows a product listing and the shopping cart control.

#### 1.2. Login validation for invalid and locked-out users

**File:** `tests/saucedemo/authentication-negative.spec.ts`

**Steps:**
  1. Start from a fresh browser context at https://www.saucedemo.com/.
    - expect: The login page is displayed.
  2. Enter an invalid username and password, then activate Login.
    - expect: The login attempt is rejected.
    - expect: A clear authentication error is shown.
    - expect: The user remains on the login page.
  3. Clear the fields, enter `locked_out_user` and `secret_sauce`, then activate Login.
    - expect: The login attempt is rejected for the locked-out account.
    - expect: An explanatory error is shown.
    - expect: The user remains unauthenticated.
  4. Verify the password field after each failed attempt.
    - expect: The password is masked and no password value is exposed in the error message.

### 2. Catalog and Cart

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse inventory, sort products, and manage the cart

**File:** `tests/saucedemo/catalog-cart-management.spec.ts`

**Steps:**
  1. Start from a fresh browser context, log in as `standard_user` with `secret_sauce`, and open the inventory page.
    - expect: The inventory page displays multiple products with names, prices, images, and add-to-cart controls.
  2. Apply the product sort option for price low to high.
    - expect: Products are ordered from the lowest price to the highest price.
  3. Add two different products to the cart.
    - expect: Each selected product changes to a remove-from-cart state.
    - expect: The cart badge reflects a count of 2.
  4. Open the shopping cart.
    - expect: The cart page lists exactly the two selected products with correct names and prices.
    - expect: The cart count remains 2.
  5. Remove one product from the cart.
    - expect: The removed product disappears from the cart.
    - expect: The remaining product is still present.
    - expect: The cart badge updates to 1.
  6. Return to the inventory page and add the removed product again.
    - expect: The product can be added again.
    - expect: The cart badge returns to 2.

#### 2.2. Cart persistence across navigation and empty-cart behavior

**File:** `tests/saucedemo/catalog-cart-boundaries.spec.ts`

**Steps:**
  1. Start from a fresh browser context, log in, add one product, and open the cart.
    - expect: The cart contains the selected product.
  2. Navigate back to the inventory page and then reopen the cart.
    - expect: The selected product remains in the cart.
  3. Remove the selected product.
    - expect: The cart becomes empty and the cart badge is removed or shows zero.
  4. Attempt to proceed to checkout with an empty cart.
    - expect: Checkout is unavailable or the application prevents progression without a product.
    - expect: No order is created.

### 3. Checkout

**Seed:** `tests/seed.spec.ts`

#### 3.1. Complete checkout with valid customer information

**File:** `tests/saucedemo/checkout-complete.spec.ts`

**Steps:**
  1. Start from a fresh browser context, log in as `standard_user`, add a product, and open the cart.
    - expect: The cart contains the selected product.
  2. Activate Checkout.
    - expect: The checkout information page is displayed.
  3. Enter valid first name, last name, and postal code values, then continue.
    - expect: The checkout overview page is displayed.
    - expect: The selected product and its price are shown.
    - expect: The item total, tax, and final total are displayed.
  4. Activate Finish.
    - expect: The order is completed successfully.
    - expect: A confirmation page shows a success message and order completion indicator.
  5. Return to the inventory page.
    - expect: The user returns to the inventory page.
    - expect: The completed order does not leave the previous cart items queued for another order.

#### 3.2. Checkout required-field validation

**File:** `tests/saucedemo/checkout-validation.spec.ts`

**Steps:**
  1. Start from a fresh browser context, log in, add a product, open the cart, and activate Checkout.
    - expect: The checkout information form is displayed.
  2. Leave all customer fields empty and activate Continue.
    - expect: The user remains on the checkout information page.
    - expect: A required-field validation error is displayed.
  3. Enter only a first name and activate Continue.
    - expect: The user remains on the checkout information page.
    - expect: Validation identifies the missing last name or otherwise prevents progression.
  4. Enter a last name as well and activate Continue without a postal code.
    - expect: The user remains on the checkout information page.
    - expect: Validation identifies the missing postal code or otherwise prevents progression.
  5. Enter a valid postal code and continue.
    - expect: The checkout overview page opens only after all required fields are supplied.

### 4. Session Management

**Seed:** `tests/seed.spec.ts`

#### 4.1. Logout ends the authenticated session

**File:** `tests/saucedemo/session-logout.spec.ts`

**Steps:**
  1. Start from a fresh browser context and log in as `standard_user` with `secret_sauce`.
    - expect: The inventory page is displayed.
  2. Open the navigation menu and activate Logout.
    - expect: The user is redirected to the login page.
  3. Use the browser Back action or navigate directly to the inventory URL.
    - expect: The protected inventory page is not accessible without authentication.
    - expect: The user is redirected to the login page or shown an appropriate authentication state.
  4. Log in again with valid credentials.
    - expect: A new authenticated session opens successfully.
