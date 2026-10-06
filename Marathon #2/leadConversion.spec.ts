import { test, expect } from "@playwright/test";
import { leadData } from "../utils/testData";

test("Verify Lead Creation and Conversion to Opportunity", async ({ page }) => {

    // ------------------------------------------------
    // 1. Launch browser and open Salesforce
    // ------------------------------------------------

    await page.goto("https://login.salesforce.com/");

    await expect(page).toHaveTitle(/Login/i);

    // ------------------------------------------------
    // 2. Login
    // ------------------------------------------------

    await page.locator("#username").fill(leadData.username);

    await page.getByRole("button", { name: "Log In" }).click();

    await page.locator("#password").fill(leadData.password);

    await page.getByRole("button", { name: "Log In" }).click();

    // Wait for Salesforce home page
    await page.waitForLoadState("domcontentloaded");

    // ------------------------------------------------
    // 3. Open App Launcher
    // ------------------------------------------------

    await page.getByRole("button", { name: /App Launcher/i }).click();

    // ------------------------------------------------
    // 4. Click View All
    // ------------------------------------------------

    await page.waitForTimeout(2000);
    await page.locator ('button[aria-label="View All Applications"]').click();

    // ------------------------------------------------
    // 5. Search Marketing
    // ------------------------------------------------

    await page.locator('//input[@placeholder="Search apps or items..."]').fill("Marketing");

    //const searchApps = page.getByPlaceholder(/Search apps and items/i);

    //await searchApps.fill("Marketing");

    // ------------------------------------------------
    // 6. Click Marketing
    // ------------------------------------------------

    await page.getByText("Marketing", { exact: true }).click();

    await page.waitForTimeout(2000);

    // ------------------------------------------------
    // 7. Click Leads tab
    // ------------------------------------------------

    //await page.getByRole("link", { name: "Leads" }).click();
    await page.getByTitle("Leads").click();
    await page.waitForTimeout(2000);

    // ------------------------------------------------
    // 8. Click New
    // ------------------------------------------------

    await page.getByRole("button", { name: "New" }).click();

    // Wait for New Lead dialog
    await expect(
        page.getByRole("heading", { name: "Lead Information" })
    ).toBeVisible();

    // ------------------------------------------------
    // 9. Fill Lead details
    // ------------------------------------------------

    // Salutation
    await page.locator('button[aria-label="Salutation"]').click();
    await page.getByText('Mrs.', { exact: true }).click();

    // First Name
    await page.getByPlaceholder("First Name").fill(leadData.firstName);

    // Last Name
    await page.getByPlaceholder("Last Name").fill(leadData.lastName);

    // Company
    await page.locator('//input[@name="Company"]').fill(leadData.company);

    // ------------------------------------------------
    // 10. Save Lead
    // ------------------------------------------------

    // click save
await page.locator('[name="SaveEdit"]').click()
    // Verify lead created
    await expect(page.getByText(/was created\./)).toBeVisible();

    // ------------------------------------------------
    // 11. Open dropdown near Submit for Approval
    // ------------------------------------------------

    // Salesforce usually has a button with aria-label "Show more actions"
    await page.locator('//span[text()="Show more actions"]').click();

    // ------------------------------------------------
    // Click Convert
    // ------------------------------------------------

    await page.getByText("Convert", { exact: true }).click();

    // Verify Convert Lead dialog
    //await expect(
      //  page.getByRole("heading", { name: /Convert Lead/i })
    //).toBeVisible();

    // ------------------------------------------------
    // 12. Enter Opportunity Name
    // ------------------------------------------------
    //await page.waitForTimeout(2000);
        await page.locator('//fieldset[legend[text()="Opportunity"]]//div[contains(@class,"createPanelCollapsed")]//button').click();
    await page.getByRole('textbox',{name:'Opportunity Name'}).fill('Test QA');
    await page.getByRole('button',{name:'Convert'}).click()
    
    // ------------------------------------------------
    // 13. Convert Lead
    // ------------------------------------------------

   // await page.getByRole("button", { name: "Convert" }).click();

    // Verify conversion message
   //await expect(page.getByText(/lead has been converted\./)).toBeVisible();

    // ------------------------------------------------
    // 14. Click Go to Leads
    // ------------------------------------------------

    //await page.getByRole("button", { name: "Go to Leads" }).click();
    await page.locator("//button[normalize-space()='Go to Leads']").click()
    await page.waitForTimeout(2000);

    // ------------------------------------------------
    // 15. Search converted lead
    // ------------------------------------------------

    await page.getByRole('button', { name: "Search" }).click()
    await page.getByRole('combobox', { name: 'Search by object type' }).click()
    const leadsOption = page.locator('//div[@aria-label="Search by object type"]/ul[@aria-label="Suggested For You"]/li').filter({ hasText: 'Leads' })
    await leadsOption.scrollIntoViewIfNeeded()
    await leadsOption.click()
    // Search for Lead by name
    const searchLead = page.getByRole('searchbox', { name: "Search Leads" })
    await searchLead.fill('Aadvik')
    await searchLead.press('Enter')
    // Verify Lead no longer exists after conversion
    await expect(page.getByText('No results')).toBeVisible();
    // ------------------------------------------------
    // 16. Navigate to Opportunities
    // ------------------------------------------------

    await page.getByRole("link", { name: "Opportunities" }).click();

    await page.waitForTimeout(2000);

    // ------------------------------------------------
    // Search Opportunity
    // ------------------------------------------------

    const opportunitySearch =
        page.getByPlaceholder(/Search this list/i);

    await opportunitySearch.fill(
        leadData.opportunityName
    );

    await page.waitForTimeout(1500);

    // ------------------------------------------------
    // 17. Click Opportunity
    // ------------------------------------------------

    await page
        .getByRole("link", {
            name: leadData.opportunityName
        })
        .click();

    // Verify Opportunity Name
    await expect(
        page.getByText(leadData.opportunityName, { exact: true })
    ).toBeVisible();

});