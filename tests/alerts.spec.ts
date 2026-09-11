import { test, expect } from '@playwright/test';
 
test('Handle Alert, Confirm and Prompt dialogs in one script', async ({ page }) => {
 
  // STEP 1: Launch the application
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
 
  // //alert---------------------------------------------------------------------------------
 
  // Validate alert text  ---on --dialog is event for alearts
 
  await page.getByText("Click for JS Alert").click()
 
  await page.on('dialog', async dialog => {
 
    //Contains message
    expect(dialog.message()).toContain('I am a JS Alert')
 // this is for ok 
    dialog. accept()
 
  })
 
 
})
 