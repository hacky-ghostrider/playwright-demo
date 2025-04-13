import { test, expect } from '@playwright/test';

const name = 'Laur';

test('Storage - test from the UI perspective', async ({ page }) => {

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await page.reload();
    await expect(input).toHaveValue('');

    input.fill(name);
    await page.getByRole('button', { name: 'Save Input'}).click();
    await page.reload();
    await expect(input).toHaveValue(name);

});

//validate input has been stored in local storage of the browser 
test('Session (or Local) Storage ', async ({ page }) => {

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await page.getByRole('button', { name: 'Save Input'}).click();

    const storage = await page.evaluate(() => window.sessionStorage);
    console.log(storage);

    //clear session storage
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await expect(input).toHaveValue('');

    //set session storage
    await page.evaluate(setLocalStorage);
    await page.reload();
    await expect(input).toHaveValue('Laurentiu');

});

function setLocalStorage() {
    sessionStorage.setItem('firstName', 'Laurentiu');
}