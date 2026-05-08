import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('Japanese landing page loads', async ({ page }) => {
    await page.goto('/ja');
    await expect(page.locator('main').first()).toBeVisible();
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('English landing page loads', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('main').first()).toBeVisible();
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('Japanese discovery page loads', async ({ page }) => {
    await page.goto('/ja/discovery');
    await expect(page.locator('main').first()).toBeVisible();
    await expect(page.locator('main').first()).toBeVisible({ timeout: 15000 });
  });
});
