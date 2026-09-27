import {test, expect} from '@playwright/test'
import path from 'path'
test ('Multiple file upload', async function name({page}) {

await page.goto("https://www.leafground.com/file.xhtml");

let fileUpload = page.locator('input[type="file"]').last();

await fileUpload.setInputFiles([
path.join('Data/Dakshan.jpeg'),
path.join('Data/AadvikSrinivas.jpeg'),
path.join('Data/Ravi.jpeg'),
path.join('Data/Hema.jpeg')

])


 await expect(page.getByText('AadvikSrinivas.jpeg')).toBeVisible();   
  await expect(page.getByText('Dakshan.jpeg')).toBeVisible(); 
  console.log("The files are uploaded successfully");
  
})