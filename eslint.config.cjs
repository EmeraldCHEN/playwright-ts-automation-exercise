// eslint.config.cjs
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  recommendedConfig: {
    extends: ["eslint:recommended"],
  },
});

module.exports = [
  ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
  {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "no-console": ["warn"],
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
];
