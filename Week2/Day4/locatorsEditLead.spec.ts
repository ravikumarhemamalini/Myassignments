// Edit Lead

import {test} from '@playwright/test'
test ('To Edit Lead', async ({page}) => {
    await page.goto(" http://leaftaps.com/opentaps/control/main")

// Fill in the login credentials and click on the login button
await page.getByRole('textbox', { name: 'USERNAME' }).fill('democsr2');

//await page.locator('#username').fill('democsr2');
await page.locator('#password').fill('crmsfa');
await page.waitForTimeout(5000);
await page.locator('[value="Login"]').click();
// Click on the CRM/SFA link to navigate to the CRM/SFA page
await page.locator('a:has-text("CRM/SFA")').click();
await page.getByText('Create Lead').click();
await page.locator('#createLeadForm_companyName').fill('Tata Consultancy Services');
await page.locator('#createLeadForm_firstName').fill('Hemamalini');
await page.locator('#createLeadForm_lastName').fill('Ravi Kumar');
await page.locator('[name="personalTitle"]').fill('Mrs');
await page.locator('#createLeadForm_generalProfTitle').fill('Software Engineer');
await page.locator('#createLeadForm_annualRevenue').fill('1000000');
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9884349128');
await page.locator('[name="submitButton"]').click();
await page.waitForTimeout(3000);
await page.getByText('Edit', {exact: true}).click();
await page.waitForTimeout(3000);
//let company = await page.locator('#createLeadForm_companyName')
//await company.click();
//await page.keyboard.press('Control+A');
//await page.keyboard.press('Backspace');
await page.locator("//input[@id='updateLeadForm_companyName']").fill('HCL Tech');
await page.getByText('Update', {exact: true}).click();
    
})