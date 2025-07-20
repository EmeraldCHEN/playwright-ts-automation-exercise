// eslint.config.js (Flat Config for ESLint 9+ with TypeScript + Playwright)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      playwright,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "no-console": ["warn"],
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
  {
    ignores: [
      'node_modules',
      'playwright-report',
      'test-results',
    ],
  },
];

