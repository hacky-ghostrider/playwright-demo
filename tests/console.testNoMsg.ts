import {test, expect} from 'playwright/test';


// This test is to check the console messages when the Register button is clicked but nothing prints 
//as the pge.on('console') is not being triggered.
// The test is not working as expected because the console messages are not being captured correctly.
test('Check console', async ({page}) => {

    await page.goto('/');
    const consoleMessages: string[] = [];


    await page.getByRole('button', {name: 'Register'}).click();

    page.on('console', msg => {
        console.log(msg)
    })

});