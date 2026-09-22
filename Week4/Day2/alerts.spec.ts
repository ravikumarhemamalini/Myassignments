import { test, expect } from '@playwright/test'
test('alert practice', async ({ page }) => {
    // open the URL
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    // handle the alert
    page.on('dialog', async dialog => {
        console.log('Dialog appeared:', dialog.message());
        console.log('Type:', dialog.type());

        // accept the alert

        await dialog.accept();

    })

    // click "Try it" inside the iframe

    // const frame = page.frameLocator('iframe#iframeResult:visible');
    const frame = page.frameLocator('iframe#iframeResult');
    await frame.getByRole('button', { name: 'Try it' }).click();


    // verify text

    await expect(frame.locator('#demo')).toHaveText('You pressed OK!')

})