import { test, expect } from "@playwright/test";
test('windows handling', async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator('.crmsfa').click();
    await page.getByRole("link", { name: "Leads" }).click();
    await page.getByRole("link", { name: "Merge Leads" }).click();
    //await page.locator('input[value="Find Leads"]').first().click();
    const fromPage = page.waitForEvent('popup');

    await page.locator('a[href*="partyIdFrom"]').click();

    const fromLead = await fromPage;

    // Work with the new window
    await fromLead.locator('a.linktext').first().click();


    const toPage = page.waitForEvent('popup');

    await page.locator('a[href*="partyIdTo"]').click();

    const toLead = await toPage;
    await toLead.waitForLoadState("domcontentloaded")
    await toLead.locator('a.linktext').last().click();
    //await to.locator('a.linktext').count();

    await page.locator('.buttonDangerous').click();



    page.on('dialog', async dialog => {
        console.log('Alert Message:', dialog.message());
        console.log('Alert Type:', dialog.type());

        // accept the alert

        await dialog.accept();


    })

    await page.locator('.buttonDangerous').click();

    await page.waitForLoadState("domcontentloaded");
    await expect(page).toHaveTitle(/Merge Leads/);
    const Title = await page.title();
    console.log(Title);


})