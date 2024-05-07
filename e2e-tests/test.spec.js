import {test} from '@playwright/test'
import testplaywright from '../objects/testplaywright'
import testData from '../models/test.json'

test('Testing Playwright', async({page}) =>{
    const testpw = new testplaywright(page);
    await page.goto('https://app.manatal-staging.com/login');
    await testpw.clickFreeQuoteButton(testData.name);
})