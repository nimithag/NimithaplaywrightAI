import { test, expect } from '@playwright/test'
 
test('Assertions', async ({ page }) => {
 
    // Step 1: Launch page
    await page.goto('https://testautomationpractice.blogspot.com/');
 
    const nmf = page.getByPlaceholder("Enter Name")
 
    await nmf.fill("Naveen k")
 
 //   await expect.soft(nmf).toBeEmpty()
 
   // await expect(nmf).toBeEditable()
 
    await expect(nmf).toBeVisible()
 
    await page.waitForTimeout(3000)
 
    await expect(nmf).toHaveValue("Naveen k")
 
    await expect(nmf).toHaveAttribute('placeholder', 'Enter Name')
 
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
 
 
 
})
 