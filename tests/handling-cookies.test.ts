import { test, expect } from '@playwright/test';

test('Cookies', async ({ page }) => {
    
    // Go to the page
    await page.goto('/');

    console.log(await page.context().cookies());    

    await page.context().addCookies([{
        name: 'cookie1',
        value: 'best-website',
        url: 'http://bitheap.tech'
    }])

    console.log(await page.context().cookies());    
    
    //remove the cookies
    await page.context().clearCookies();

    //to validate that cookies are removed, we can check the cookies again
    // and it should be empty
    console.log(await page.context().cookies());
});