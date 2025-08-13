# playwright-ts-automation-exercise

## 🚀 Project Structure & Technologies

### - Language & Framework

- TypeScript + Playwright (UI & API testing)

### - Key Features

- Page Object Model (POM):
  - Encapsulate UI elements and actions for reusability and clarity
  - Use constructor injection of Playwright’s Page for context
- Dynamic Test Data:
  - Leverage `@faker-js/faker` for user data generation (names, emails, addresses, etc.)
- Environment Configuration:
  - Store multiple env variables in `.env` files to manage different environments and skip tests if unreachable
- CI Integration with GitHub Actions

## Project Structure (Maintainable & Scalable)

- playwright-ts-automation-exercise/
  - .github/
    - workflows/
      - playwright.yml => Set up GitHub Actions
  - configs/
    - test.config.ts => Configuration files (e.g., test environments, global settings)
  - env/ => Configure environment settings
    - .env.dev
    - .env.test
  - utilities => Check environment, etc.
    - ......
  - ui/ => UI related test code
    - pages/ => Page Object Model (POM) classes for UI pages
      - HomePage.ts
      - PaymentPage.ts
      - ......
    - tests/ => UI test specs
      - 14PlaceOrderRegisterWhileCheckout.test.ts
      - 15PlaceOrderRegisterBeforeCheckout.test.ts
    - test-data/ => Test data and test input files
      - userData.ts
  - api/ => API related test code
    - clients/ => API client classes and request wrappers
      - userClient.ts
    - tests/ => API test specs
      - loginAPI.test.ts
  - wiki/ => Useful info
    - ......
  - .gitignore
  - playwright.config.ts => Playwright test runner configuration
  - package-lock.json
  - package.json
  - tsconfig.json
  - README.md

## More Info

- [Getting Started](https://github.com/EmeraldCHEN/playwright-ts-automation-exercise/blob/main/wiki/Getting_Started.md)

- [Playwright Docs](https://playwright.dev/docs/intro)

Happy testing! 🚀
