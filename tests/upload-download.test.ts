import { test, expect } from '@playwright/test';


test('Download a single file and assert',async ({ page }) => {

    await page.goto('/benefits.html');

    const downloadPromise = page.waitForEvent('download');

    await page.getByText('Download the Plan').click();

    await downloadPromise;
    
});

test('Upload', async ({ page }) => {

    await page.goto('/learn.html');

    const uploadInput = page.locator('input[type="file"]');

    await uploadInput.setInputFiles(['download/learning_plan.pdf']);

    
});