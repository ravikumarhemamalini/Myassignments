// Decathlon Practice 

import { test, expect } from '@playwright/test'
test ('Decathlon Practice', async ({page}) => {

    // Launch the browse
    await page.goto("https://www.decathlon.in/");
    //  Search icon on the home page 
    const search = page.getByPlaceholder("Search for 60+ sports and 6,000+ products");
    await search.click();
    // search is enabled
    await search.isEnabled();
    // Enter the product name as "shoes" in the search field
    await search.fill("shoes");
    // Press Enter
    await search.press('Enter');
    await page.waitForTimeout(3000);
    // Capture and print the page title in the console
    const title = await page.title();
    console.log(title);
    // assert Title
    await expect(page).toHaveTitle('Search | shoes');
    // Click on the "Running" category filter
    await page.locator('button').filter({ hasText: 'Sport' }).click();
    await page.getByText('Running', { exact: true }).click();
    //  Click on the "Men" gender filter.
    await page.locator('//span[text()="Gender"]/parent::button').click();
    await page.getByRole('checkbox', {name: 'Men 18'}).check();
    // Click on the shoe size filter "UK 10.5"
    await page.locator('//span[text()="Size"]/parent::button').click();
    //await page.getByText('10.5', { exact: true }).click();
    await page.getByText('Uk 10.5 - eu 45', { exact: true }).click();
    // Click on the "Most relevant" sorting dropdown
    await page.locator('[data-test-id="sort-bar-desktop:dropdown-button"]').click();
    await page.locator('[data-test-id="sort-option-dsi_pim_migration_price_asc"]').click();
    await page.getByAltText('Men Running Daily Foam Cushion Shoes, Jogflow 190.1 - Black').click();
    
    // await page.getByAltText('Men Running Superior Grip Cushion Shoes, Jogflow 100 - Black').click();
    await page.locator('[data-test-id="pdp-size-option-button-10.5"]').click();
    await page.getByRole('button', {name: "Add to cart"}).click();
    await expect(page.getByText('Product(s) added to cart')).toBeVisible();
    console.log("Product is added to the cart successfully");

    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.locator('[data-test-id="header-desktop:cart-icon"]').click();
    const total = page.getByText("Total₹");
    await expect(total).toBeVisible();
    const value = await total.innerText();
    console.log(value);
    
    
})