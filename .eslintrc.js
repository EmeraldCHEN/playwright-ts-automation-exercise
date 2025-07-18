module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};