// Edit Individuals

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
    let search = await page.locator('[name="Individual-search-input"]');
    await search.fill("Ravi");
    await search.press('Enter');
    await page.locator("//span[text()='Show Actions']").click()
// select edit
await page.locator("//a[@title='Edit']").click()
// click salutation
await page.locator("(//span[text()='--None--'])[1]").click()
// select salutation as Mr
await page.locator("//a[@title='Mr.']").click()
// enter the firstname
await page.locator('//input[@placeholder="First Name"]').fill("Jebin")
// click save
await page.locator("//span[text()='Save']").click()
// verify individuals name edited
let editIndividualName = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
console.log(editIndividualName)
})