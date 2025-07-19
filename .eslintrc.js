module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      },
    },
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
