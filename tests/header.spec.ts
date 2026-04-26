import { test, expect } from '@playwright/test';

/**
 * Header / mobile-menu behaviour.
 * Catches the duplicate-listener bug we just fixed: two listeners → click flips
 * twice → menu visually doesn't change. We assert the visible state, not just
 * the attribute, so a regression of that bug fails the test.
 */

const VIEWPORTS = {
  mobile:  { width: 375,  height: 812  },  // iPhone-ish
  tablet:  { width: 820,  height: 1180 },  // iPad Air portrait — between md and lg
  desktop: { width: 1280, height: 800  },  // Standard laptop
};

test.describe('Header — mobile menu (collapsed below lg=1024)', () => {
  for (const [label, viewport] of Object.entries(VIEWPORTS)) {
    if (label === 'desktop') continue;

    test(`${label} (${viewport.width}px): hamburger toggles the menu`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      const toggle = page.locator('#mobile-menu-toggle');
      const menu   = page.locator('#mobile-menu');

      await expect(toggle).toBeVisible();
      await expect(menu).toBeHidden();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');

      await toggle.click();
      await expect(menu).toBeVisible();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');

      // The "Karriere" link inside the now-visible menu must be reachable.
      await expect(menu.getByRole('link', { name: 'Karriere' })).toBeVisible();

      await toggle.click();
      await expect(menu).toBeHidden();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });
  }
});

test.describe('Header — desktop nav (lg and up)', () => {
  test(`desktop (${VIEWPORTS.desktop.width}px): inline nav visible, hamburger hidden`, async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/');

    await expect(page.locator('#mobile-menu-toggle')).toBeHidden();
    await expect(page.locator('header nav').first()).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'Referenzen' })).toBeVisible();
  });
});
