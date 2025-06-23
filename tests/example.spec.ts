import { test, expect } from '@playwright/test';

test('homepage has correct title and loads properly', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/chimech-mcp/);

  // Expect a heading to be visible
  await expect(page.getByRole('heading', { name: '千机阁' })).toBeVisible();
});

test('marketplace page loads and shows digital employees', async ({ page }) => {
  await page.goto('/marketplace');

  // Check if the page title is correct
  await expect(page.getByRole('heading', { name: '数字员工市场' })).toBeVisible();

  // Check if at least one employee card is visible
  await expect(page.locator('.grid').first()).toBeVisible();
});

test('dashboard navigation works', async ({ page }) => {
  // This test would require authentication, so we'll skip it for now
  // or mock the authentication state
  await page.goto('/dashboard');
  
  // If redirected to login, check login page
  const currentUrl = page.url();
  if (currentUrl.includes('/login')) {
    await expect(page.getByRole('heading', { name: '登录' })).toBeVisible();
  } else {
    // If somehow authenticated, check dashboard
    await expect(page.getByRole('heading', { name: '仪表板' })).toBeVisible();
  }
});