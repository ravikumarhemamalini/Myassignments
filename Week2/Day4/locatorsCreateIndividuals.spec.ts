// Create Individuals

import { expect, test } from "@playwright/test";
test ('Create Individual', async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('[id="Login"]').click();
    await page.waitForTimeout(2000);
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('[id="Login"]').click();
    await page.locator('button[title="App Launcher"]').click();
    await page.waitForTimeout(2000);
    await page.locator ('button[aria-label="View All Applications"]').click();
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("Individuals");
    await page.locator('a[data-label="Individuals"]').click();
    //await page.locator("//span[text()='New Individual']").click(); 
    await page.locator('a[title="New"]').click(); //New Individual
    await page.locator("[placeholder='Last Name']").fill("Ravi");
    //await page.getByText('Save').click();
    await page.locator('button[title="Save"]').last().click();
    await expect(page.getByText(/was created\./)).toBeVisible();
    console.log("The Individual is created successfully");
})