import { test, expect } from '@playwright/test';

// ==========================================
// SALESFORCE TESTS
// ==========================================

test.describe('Salesforce Tests', () => {

  // Reuse Salesforce authenticated session
  test.use({
    storageState: 'sf-storage.json'
  });

  // ----------------------------------------
  // Test 1 - test.only() -> test.only() runs only once so changed it as test to check for other annotations 
  // ----------------------------------------

  test('Verify Salesforce homepage using saved session',async ({ page }) => {

      await page.goto('https:/login.salesforce.com/');

      await expect(page).toHaveURL(/salesforce/);

      console.log('Salesforce homepage verified');

    }
  );


  // ----------------------------------------
  // Test 2 - test.slow()
  // ----------------------------------------

  test('Salesforce slow test',async ({ page }) => {
      test.slow();

      await page.goto('https://login.salesforce.com/');
      console.log('Salesforce page opened');

    }
  );


  // ----------------------------------------
  // Test 3 - test.fail()
  // ----------------------------------------

  test(
    'Salesforce invalid session',
    async ({ page }) => {

      test.fail();

      await page.goto(
        'https://login.salesforce.com/'
      );

      await page.locator('#username').fill(
        'testuser'
      );

      await page.locator('#password').fill(
        'testpassword'
      );

      await page.locator('#Login').click();

      await expect(page).toHaveURL(/home/);

    }
  );

});


// ==========================================
// LEAFTAPS TESTS
// ==========================================


// ------------------------------------------
// Test 4 - Valid Login
// ------------------------------------------

test(
  'LeafTaps login and verify homepage',
  async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator('#username').fill('DemoSalesManager');

    await page.locator('#password').fill('crmsfa');

    await page.locator('.decorativeSubmit').click();

    await expect(page).toHaveTitle(/Leaftaps/);

    console.log('LeafTaps login successful');

  }
);


// ------------------------------------------
// Test 5 - Invalid Login
// ------------------------------------------

test(
  'LeafTaps invalid login',
  async ({ page }) => {

    test.fail();

    await page.goto(
      'http://leaftaps.com/opentaps/control/main'
    );

    await page.locator('#username').fill(
      'InvalidUser'
    );

    await page.locator('#password').fill(
      'InvalidPassword'
    );

    await page.locator('.decorativeSubmit').click();

    await expect(page).toHaveTitle(
      'Welcome'
    );

  }
);


// ------------------------------------------
// Test 6 - Incomplete Flow
// ------------------------------------------

test.fixme(
  'LeafTaps incomplete flow',
  async ({ page }) => {

    await page.goto(
      'http://leaftaps.com/opentaps/control/main'
    );

    await page.locator('#username').fill(
      'DemoSalesManager'
    );

    await page.locator('#password').fill(
      'crmsfa'
    );

    // Login intentionally omitted

    await page.getByText('CRM/SFA').click();

  }
);


// ------------------------------------------
// Test 7 - Optional
// ------------------------------------------

test.skip(
  'Optional LeafTaps test',
  async ({ page }) => {

    await page.goto(
      'http://leaftaps.com/opentaps/control/main'
    );

  }
);
