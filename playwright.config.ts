import { defineConfig, devices } from '@playwright/test';
import { config } from '@test.config';

export default defineConfig({
  use: {
    baseURL: config.baseURL,
  },
  globalSetup: './utilities/globalSetup',
  timeout: 60000, // Extends the default test timeout to 60s to accommodate slower operations or UI delays
  expect: {
    timeout: 10000, // Global timeout for all expect() assertions
  },
  projects: [
    {
      name: 'API Tests',
      testMatch:  ['api/tests/**/*.spec.ts'],
      use: {
        browserName: undefined, // 🚫 Run API tests without launching any browsers
      },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  reporter: [['html', { open: 'never' }]],
});
