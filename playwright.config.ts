import { defineConfig } from '@playwright/test';
import { config } from './configs/test.config';

export default defineConfig({
  use: {
    baseURL: config.baseURL,
  },
  timeout: 60000, // Extends the default test timeout to 60s to accommodate slower operations or UI delays
  expect: {
    timeout: 10000, // Global timeout for all expect() assertions
  },
});