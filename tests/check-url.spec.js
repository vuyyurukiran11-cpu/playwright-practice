const { test, expect } = require('@playwright/test');

test('Verify the correct URL loads', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
