import {test} from '@playwright/test'
test ('Handle Prompt Dialog', async ({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on('dialog', async dialog => {
        console.log('Dialog appeared:', dialog.message());
        await dialog.accept('playwright')

        });

        await page.getByText('prompt dialog').click();
    
})
