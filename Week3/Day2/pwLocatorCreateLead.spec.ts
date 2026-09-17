// Create a Lead using Playwright Locators 

import { test, expect } from '@playwright/test'
test('Create a Lead using Playwright Locators ', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main ");
    await page.getByRole('textbox', { name: "Username" }).fill("Demosalesmanager");
    await page.getByLabel("password").fill("crmsfa");
    await page.locator('//input[@value="Login"]').click();
    await page.getByRole('link').filter({ hasText: "CRM/SFA" }).click();
    await page.getByRole('link', { name: "Leads" }).click();
    await page.getByRole('link', { name: "Create Lead" }).click();

    await page.locator('#createLeadForm_companyName').fill('HCL Tech');
    await page.locator('#createLeadForm_firstName').fill('Hemamalini');
    await page.locator('#createLeadForm_lastName').fill('Ravi Kumar');
    await page.locator('[name="personalTitle"]').fill('Mrs');
    await page.locator('#createLeadForm_generalProfTitle').fill('Software Engineer');
    await page.locator('#createLeadForm_annualRevenue').fill('1000000');
    await page.locator('#createLeadForm_departmentName').fill('QA');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9884349128');
    //await page.locator('[name="submitButton"]').click();
    await page.locator('[name="submitButton"]').click();

})