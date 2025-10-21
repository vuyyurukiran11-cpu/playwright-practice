import {test, expect} from '@playwright/test';

test('login page should have correct title', async ({page}) => {
    await page.goto('https://www.saucedemo.com/'); //a public test
    await expect(page).toHaveTitle(/Swag Labs/); 
});