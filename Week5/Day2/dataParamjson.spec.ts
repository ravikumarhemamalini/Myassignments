import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({path: 'utils/qa.env'});

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../Data/testData.json'),
    'utf-8'
  )
);
//  parse(fs.readFileSync('Data/sflogin.csv', 'utf-8'), {columns: true, skip_empty_lines: true})
// Read CSV file
const csvData = fs.readFileSync(path.join(__dirname, '../Data/testData.csv'),
  'utf-8'
);

// Convert CSV into rows
//onst csvRows = csvData.trim().split('\n');

// Get first data row
//const csvValues = csvRows[1].split(',');

test('Create Lead using parameterized test data', async ({ page }) => {

  // -----------------------------------
  // 1. Navigate to LeafTaps
  // -----------------------------------

  await page.goto(
    'http://leaftaps.com/opentaps/control/main'
  );

  // -----------------------------------
  // 2. Enter username
  // -----------------------------------

  await page.locator('#username').fill(
    process.env.LEAFTAPS_USERNAME!
  );

  // -----------------------------------
  // 3. Enter password
  // -----------------------------------

  await page.locator('#password').fill(
    process.env.LEAFTAPS_PASSWORD!
  );

  // -----------------------------------
  // 4. Click Login
  // -----------------------------------

  await page.locator('.decorativeSubmit').click();

  // -----------------------------------
  // 5. Click CRM/SFA
  // -----------------------------------

  await page.getByText('CRM/SFA').click();

  // -----------------------------------
  // 6. Click Leads
  // -----------------------------------

  await page.locator('//a[text()="Leads"]').click();

  // -----------------------------------
  // 7. Click Create Leads
  // -----------------------------------

  await page.locator('//a[text()="Create Lead"]').click();

  // -----------------------------------
  // 8. Fill mandatory fields
  // -----------------------------------

  await page.locator('#createLeadForm_companyName').fill(
    jsonData.companyName
  );

  await page.locator('#createLeadForm_firstName').fill(
    jsonData.firstName
  );

  await page.locator('#createLeadForm_lastName').fill(
    jsonData.lastName
  );

  // -----------------------------------
  // 9. Select Source using LABEL
  // -----------------------------------

  await page.locator('#createLeadForm_dataSourceId').selectOption({
    label: jsonData.source
  });

  // -----------------------------------
  // 10. Select Marketing Campaign using VALUE
  // -----------------------------------

  await page.locator('#createLeadForm_marketingCampaignId').selectOption({
    label: jsonData.marketingCampaign
  });

  // -----------------------------------
  // 11. Get Marketing Campaign count
  //     and print all values
  // -----------------------------------

  const marketingCampaign = page.locator(
    '#createLeadForm_marketingCampaignId option'
  );

  const marketingCount = await marketingCampaign.count();

  console.log(
    `Marketing Campaign count: ${marketingCount}`
  );

  for (let i = 0; i < marketingCount; i++) {

    const value = await marketingCampaign.nth(i).innerText();

    console.log(
      `Marketing Campaign ${i}: ${value}`
    );
  }

  // -----------------------------------
  // 12. Select Industry using INDEX
  // -----------------------------------

  await page.locator('#createLeadForm_industryEnumId')
    .selectOption({
      index: jsonData.industryIndex
    });

  // -----------------------------------
  // 13. Select Preferred Currency
  // -----------------------------------

  await page.locator('#createLeadForm_currencyUomId')
    .selectOption({
      label: jsonData.preferredCurrency
    });

  // -----------------------------------
  // 14. Select Country
  // -----------------------------------

  await page.locator('#createLeadForm_generalCountryGeoId')
    .selectOption({
      label: jsonData.country
    });

  // -----------------------------------
  // 15. Select State
  // -----------------------------------

  await page.locator('#createLeadForm_generalStateProvinceGeoId')
    .selectOption({
      label: jsonData.state
    });

  // -----------------------------------
  // 16. Get State count
  //     and print all states
  // -----------------------------------

  const states = page.locator(
    '#createLeadForm_generalStateProvinceGeoId option'
  );

  const stateCount = await states.count();

  console.log(`State count: ${stateCount}`);

  for (let i = 0; i < stateCount; i++) {

    const stateName = await states.nth(i).innerText();

    console.log(
      `State ${i}: ${stateName}`
    );
  }

  // -----------------------------------
  // 17. Create Lead
  // -----------------------------------

  await page.locator(
    'input[value="Create Lead"]'
  ).click();

});