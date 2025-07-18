import { defineConfig } from '@playwright/test';
import { config } from './configs/test.config';

export default defineConfig({
  use: {
    baseURL: config.baseURL,
  },
});
