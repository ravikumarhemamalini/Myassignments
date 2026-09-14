// To Create Lead 

import {test, expect} from '@playwright/test'
test ('To create a Lead using locators', async ({page}) => {

  await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('[id="Login"]').click();
    await page.waitForTimeout(2000);
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('[id="Login"]').click();
    await page.locator('button[title="App Launcher"]').click();
    //await page.locator('a[data-label="Sales"]').click(); 
    await page.locator ('button[aria-label="View All Applications"]').click();
    await page.locator('one-app-launcher-app-tile[data-name="Sales"]').click();
    await page.locator('a[title="Leads"]').click();
    await page.locator('a[title="New"]').click();
    await page.waitForTimeout(5000);
    await page.locator('button[aria-label="Salutation"]').click();
    await page.getByText('Mrs.', {exact:true}).click();
    await page.locator('[name="lastName"]').fill("Ravi Kumar");
    await page.locator ('[name="Company"]').fill("HCL");
    await page.locator('[name="SaveEdit"]').click();
    await expect(page.getByText(/was created\./)).toBeVisible();
    console.log("The Lead Created Successfully");
    

})