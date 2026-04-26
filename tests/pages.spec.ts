import { test, expect } from '@playwright/test';

/**
 * Smoke tests: every page loads, returns 2xx, has an h1, no console errors.
 * Adding a new route? Add it here too.
 */

const ROUTES = [
  '/',
  '/services',
  '/services/project-services',
  '/services/solution-services',
  '/services/quality-services',
  '/services/software-services',
  '/referenzen',
  '/ueber-uns',
  '/karriere',
  '/kontakt',
  '/impressum',
  '/datenschutz',
  '/agb',
];

for (const route of ROUTES) {
  test(`${route} loads cleanly`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    const response = await page.goto(route);
    expect(response?.status(), `${route} should respond with 2xx`).toBeLessThan(400);

    await expect(page.locator('h1').first(), `${route} should render an <h1>`).toBeVisible();

    expect(consoleErrors, `${route} console errors`).toEqual([]);
  });
}

test('404 page renders for unknown route', async ({ page }) => {
  await page.goto('/this-route-does-not-exist', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: /Hier ist nichts/i })).toBeVisible();
});
