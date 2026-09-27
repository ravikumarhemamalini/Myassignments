import {test, expect} from '@playwright/test'
test ('File upload', async ({page}) => {

await page.goto("https://login.salesforce.com/")
//await page.locator('#username').fill("aadviksrinivas.r.3ee3c4cc3418@agentforce.com")
await page.locator('#username').fill("ravikumarhemamalini.943c010a3774@agentforce.com")
//await page.locator('#username').fill("dakshanravikumar.58969c53c214@agentforce.com");
await page.locator('#Login').click();
await page.locator('#password').fill("Qeagle@123");
await page.locator('#Login').click();
await page.waitForTimeout(8000);
await page.getByTitle('App Launcher').click();
await page.getByRole('button', {name: "View All Applications"}).click();
await page.waitForTimeout(3000);
await page.waitForLoadState('domcontentloaded');
await page.getByPlaceholder('Search apps or items...').fill("Accounts");
await page.waitForLoadState('domcontentloaded')
await page.locator('.label-display').click();
await page.locator('a[title="New"]').click();
//await page.getByRole('textbox', {name: "AccountName"}).fill("Test Upload");
await page.locator('input[name="Name"]').fill("Test Upload");
//await page.getByLabel("Account Name").fill("Test Upload");
await page.locator('button[aria-label="Rating"]').click();
await page.getByText('Warm', {exact: true}).click();
await page.locator('button[aria-label="Type"]').click();
await page.getByText('Prospect', {exact: true}).click();
await page.locator('button[aria-label="Industry"]').click();
await page.getByText('Banking', {exact: true}).click();
await page.locator('button[aria-label="Ownership"]').click();
await page.getByText('Public', {exact: true}).click();
await page.locator('button[name="SaveEdit"]').click();

await expect(page.getByText(/was created\./)).toBeVisible();
console.log("The Account was created")

let fileInput = page.locator('input[type="file"]');

await fileInput.scrollIntoViewIfNeeded();

await fileInput.setInputFiles('Data/Dakshan.jpeg');

await page.locator('//span[text()="Done"]').click();

await expect(page.getByText(/file was added to the Account\./)).toBeVisible();
console.log("The File has got uploaded")


})

