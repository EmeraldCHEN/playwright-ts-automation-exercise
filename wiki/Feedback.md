# Feedback

## Comments

- Improvement 1:
  - Description: Temporarily un-ignored the `.env` files to ensure GitHub Actions can run tests successfully.

- Feedback 1:
  - Description: In a real-world scenario, `.env` files should be excluded from source control to avoid exposing sensitive data. I’m aware that the best practice for CI pipelines is to use GitHub Actions Secrets or AWS Secrets Manager to securely store environment variables. However, due to limited time, I did not configure secrets for this exercise.

- Improvement 2:
  - Description: Temporarily skip running `npm run lint` in the CI pipeline to ensure GitHub Actions could execute tests without errors.

- Feedback 2:
  - Description: When running `npm run lint`, some errors occurred because the ESLint configuration was not fully set up to support TypeScript files. Due to time constraints, I was unable to adjust the linting setup to properly handle TypeScript, so linting is currently skipped in the CI pipeline. This should be addressed in future to ensure proper code quality checks.

- Update in the newly created feature branch: `feature/eslint-and-more`
  - Fix with assistance from Copilot: \_\_dirname is not defined in ES module scope in the feature branch: `feature/eslint-and-more` by adding "type": "module" in `package.json` file. Without doing that, `eslint.config.js` won't be treated as ESM unless renamed to `eslint.config.mjs` which isn't ideal for tooling consistency

  - Create a pre-commit hook using `husky` to compile, lint, and run tests to fail commits with assistance from ChatGPT
    - 💡I think it's more efficient to run tests in GitHub Actions instead of locally in the pre-commit hook because:
      1) local test runs can be slow, especially with full suites
      2) pre-commit hooks can get annoying during frequent commits
      3) - CI offers consistent, isolated environments with better feedback loops

  - Use Prettier for formatting, ESLint for code quality
    - Prettier is highly recommended if you want automated formatting in your workflow (especially for team projects or professional automation code)

  - Configure API tests for headless mode

  - Configure HTML test report

  - Add a changelog file


---

## Links

[README](https://github.com/EmeraldCHEN/playwright-ts-automation-exercise/blob/main/README.md) | [EXERCISE](EXERCISE.md) | [GETTING_STARTED](https://github.com/EmeraldCHEN/playwright-ts-automation-exercise/blob/main/wiki/Getting_Started.md) | [ISSUES](https://github.com/EmeraldCHEN/playwright-ts-automation-exercise/blob/main/wiki/Issues.md)
