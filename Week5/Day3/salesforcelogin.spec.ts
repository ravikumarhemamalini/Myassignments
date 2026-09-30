import { test, expect } from '@playwright/test';

test('Salesforce Login and Save Storage State', async ({ page }) => {

  // Launch Salesforce
  await page.goto('https://login.salesforce.com/');

  // Enter username
  await page.locator('#username').fill('ravikumarhemamalini.943c010a3774@agentforce.com');

  // Click Login
  await page.locator('#Login').click();
  
  // Enter password
  await page.locator('#password').fill('Qeagle@123');

  // Click Login
  await page.locator('#Login').click();

  // Wait for Salesforce to load
  await page.waitForLoadState('domcontentloaded');

  // Verify login
  await expect(page).toHaveURL(/salesforce/);

  // Save authenticated session
  await page.context().storageState({
    path: 'sf-storage.json'
  });

});