import { test, expect } from '@playwright/test';

test('basic page loading test', async ({ page }) => {
  await page.goto('/');
  
  // Just check if the page loads without errors
  await expect(page).toHaveURL('/');
  
  // Check if the page has some content
  const content = await page.textContent('body');
  expect(content).toContain('千机阁');
});