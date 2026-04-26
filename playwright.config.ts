import { defineConfig } from '@playwright/test';

/**
 * Playwright config — runs against `npm run preview` (built site).
 * Locally Playwright reuses an already-running dev/preview server.
 * In CI it boots one fresh from a build.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',

  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // All projects use Chromium with custom viewports — keeps the install
  // small while still exercising mobile/tablet/desktop layout breakpoints.
  projects: [
    { name: 'mobile',  use: { browserName: 'chromium', viewport: { width: 390,  height: 844  }, hasTouch: true, isMobile: true } },
    { name: 'tablet',  use: { browserName: 'chromium', viewport: { width: 820,  height: 1180 }, hasTouch: true } },
    { name: 'desktop', use: { browserName: 'chromium', viewport: { width: 1280, height: 800  } } },
  ],

  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
