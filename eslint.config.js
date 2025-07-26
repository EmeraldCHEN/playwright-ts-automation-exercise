import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'playwright': playwright,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'playwright/no-wait-for-timeout': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': ['warn'],
      '@typescript-eslint/no-unused-vars': ['error'],
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