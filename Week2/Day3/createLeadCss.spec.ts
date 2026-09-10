// Create a Lead using CSS selectors

import { test } from '@playwright/test';

test ('Create a lead using CSS Selectors', async({page}) =>{
// Navigate to the application URL
await page.goto(" http://leaftaps.com/opentaps/control/main")
// Fill in the login credentials and click on the login button
await page.locator('#username').fill('democsr2');
await page.locator('#password').fill('crmsfa');
await page.waitForTimeout(5000);
await page.locator('[value="Login"]').click();
// Click on the CRM/SFA link to navigate to the CRM/SFA page
await page.locator('a:has-text("CRM/SFA")').click();
/* await page.locator('#button').click();
await page.locator('#ext-gen511').click(); */
// Click on the Create Lead link to navigate to the Create Lead page
await page.getByText('Create Lead').click();
await page.locator('#createLeadForm_companyName').fill('Tata Consultancy Services');
await page.locator('#createLeadForm_firstName').fill('Hemamalini');
await page.locator('#createLeadForm_lastName').fill('Ravi Kumar');
await page.locator('[name="personalTitle"]').fill('Mrs');
await page.locator('#createLeadForm_generalProfTitle').fill('Software Engineer');
await page.locator('#createLeadForm_annualRevenue').fill('1000000');
await page.locator('#createLeadForm_departmentName').fill('QA');
// Get all the options from the dropdown and print them to the console
let options = await page.locator('#createLeadForm_dataSourceId option').allTextContents();

for (let option of options) {
console.log(option);

}
// Fill in the primary phone number and click on the submit button to create the lead
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9884349128');
await page.locator('[name="submitButton"]').click();

})