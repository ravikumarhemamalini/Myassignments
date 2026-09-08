// launch Red Bus in Edge browser and Flipkart in webkit
import { test, webkit, chromium } from '@playwright/test';

// Test to launch Edge browser and navigate to Redbus 
test('launch edge and webkit', async () => {
    // launch Edge browser and navigate to Redbus
    const edge = await chromium.launch({
        channel: 'msedge',
        headless: false
    })
    // create a new page in Edge browser
    const edgepage = await edge.newPage();
    await edgepage.goto('https://www.redbus.in/');
    // print the title and url of the page
    console.log('The Redbus Title is: ' + await edgepage.title());
    console.log('The Redbus URL is: ' + await edgepage.url());


    // launch webkit browser and navigate to Flipkart
    const webkitBrowser = await webkit.launch({
        headless: false
    })
    // create a new page in webkit browser
    const webkitPage = await webkitBrowser.newPage();
    await webkitPage.goto("https://www.flipkart.com/");
    // print the title and url of the page
    console.log('The Flipkart Title is: ' + await webkitPage.title());
    console.log('The Flipkart url is: ' + await webkitPage.url());

})