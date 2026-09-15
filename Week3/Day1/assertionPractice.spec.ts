// Assertion Practice

import {test, expect} from '@playwright/test'
test('test', async ({page}) => {
    // Navigate to the Page
    await page.goto("https://leafground.com/input.xhtml");
    // Validate a Disabled Textbox
    await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled();
    // Validate an Enabled Textbox
    await expect(page.locator('//input[@value="Can you clear me, please?"]')).toBeEnabled();

    // Soft Assertion Practice
    let Enabletest = page.locator('//input[@value="Chennai"]');
    await Enabletest.fill("Avadi");
    await expect.soft(Enabletest).toBeDisabled();

    //  Fill Data
    await page.locator('//input[@placeholder="Babu Manickam"]').fill("Hemamalini");

})