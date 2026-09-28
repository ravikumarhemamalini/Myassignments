import {test, expect} from '@playwright/test'
import { parse } from "csv-parse/sync"
import fs from 'fs'
import path from 'path'
let value: any[] = parse(fs.readFileSync('Data/sflogin.csv', 'utf-8'), {columns: true, skip_empty_lines: true})
for (let details of value){

    test(`Learn to upload csv file ${details.tcid}`, async ({page}) => {
        await page.goto("https://leaftaps.com/opentaps/control/main");
        await page.locator('#username').fill(details.username);
        await page.locator('#password').fill(details.password);
        await page.locator('.decorativeSubmit').click();
        await expect(page.getByText("CRM/SFA")).toBeVisible();
        console.log(await page.getByText("CRM/SFA").innerText());
        //console.log("CRM/SFA page is displayed")

        
    })


}

