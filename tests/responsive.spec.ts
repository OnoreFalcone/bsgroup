import { test, expect } from '@playwright/test';

/**
 * No-horizontal-overflow check. Catches the iPad-768 header-overlap class of
 * bug: if any element pushes the body wider than the viewport, this fails.
 *
 * Run only against the desktop project to avoid the device-emulated viewports
 * adding their own scrollbar quirks.
 */

const ROUTES = [
  '/',
  '/services',
  '/services/project-services',
  '/services/quality-services',
  '/referenzen',
  '/ueber-uns',
  '/karriere',
  '/kontakt',
];

const WIDTHS = [320, 375, 768, 820, 1024, 1280, 1440];

test.describe('No horizontal overflow', () => {
  for (const route of ROUTES) {
    for (const width of WIDTHS) {
      test(`${route} @ ${width}px`, async ({ page }, testInfo) => {
        // These checks set their own viewport, so run them once (on desktop project).
        test.skip(testInfo.project.name !== 'desktop',
          'Overflow check is project-agnostic; run it once on the desktop project.');

        await page.setViewportSize({ width, height: 900 });
        await page.goto(route);

        const overflow = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));

        // Allow 1px slop for sub-pixel rounding.
        expect(overflow.scrollWidth, `${route} should not overflow at this width`)
          .toBeLessThanOrEqual(overflow.clientWidth + 1);
      });
    }
  }
});
