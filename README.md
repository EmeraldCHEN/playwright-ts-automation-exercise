# playwright-ts-automation-exercise
Practice project for UI & API test automation using Playwright in TypeScript, with a modern test structure, Page Object Model (POM), dynamic test data, and GitHub Actions CI integration.

## Project Structure (Maintainable & Scalable)

playwright-ts-automation-exercise/
│
├── .github/ 
│   └── workflows/
│      └── playwright.yml 
│
├── configs/                   # Configuration files (e.g., test environments, global settings)
│   └── test.config.ts
│
├── env/                       # Configure environment settings
│   └── .env.dev
│   └── .env.test
│
├── ui/                        # UI related test code
│   ├── pages/                 # Page Object Model (POM) classes for UI pages
│   │   ├── HomePage.ts
│   │   └── PaymentPage.ts
│   │   └── ......
│   └── tests/                 # UI test specs (Playwright test files)
│   │   ├── home.test.ts
│   │   └── payment.test.ts
│   │   └── ......
│   ├── test-data/             # Test data and test input files
│       └── userData.ts
├── api/                       # API related test code
│   ├── clients/               # API client classes and request wrappers
│   │   └── userClient.ts
│   └── tests/                 # API test specs
│       └── user.test.ts
│
├── wiki/                      # Useful info
│
├── playwright.config.ts       # Playwright test runner configuration
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md


## More Info

- Run Playwright tests => See [Getting Started](https://github.com/EmeraldCHEN/playwright-ts-automation-exercise/blob/main/wiki/Getting_Started.md)

- Playwright docs => See [Playwright Docs](https://playwright.dev/docs/intro)


Happy testing! 🚀





