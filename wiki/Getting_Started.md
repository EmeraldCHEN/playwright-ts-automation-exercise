# Getting Started

## Purpose

This document provides step-by-step instructions for setting up, running, and maintaining Playwright tests.

## Getting the Latest Code

- If you have not cloned the repo yet: Open terminal (VSCode terminal, Command Prompt, Git Bash, etc.) to follow steps on "How to deploy it locally" i

- If you already cloned the repo: 

1) Open terminal inside your project folder to get the latest changes from GitHub:

```ts
cd path/to/playwright-github-actions
```

2) Pull the latest code from the main branch of the remote GitHub repository by running:

```ts
git pull origin main
```

✅ Optional: Check Branch or Switch

- If you're working on a feature branch, check or switch:

```ts
git branch         # See current branch
git fetch          # Update remote info
git checkout main  # Switch to main branch
```

## How to deploy it locally

✅ Prerequisites

- Make sure you have the following installed:

- Node.js (v18+ recommended, see [Node.js](https://nodejs.org/en))

- npm (comes with Node.js)

- Optional: Git (see [Git](https://git-scm.com/downloads))

🛠️ Steps to Run Locally

1. Clone the Repository

```ts
git clone https://github.com/EmeraldCHEN/playwright-github-actions.git
cd playwright-github-actions
```

2. Install Dependencies

```ts
npm install
```

3. Check Playwright Installation

```ts
npx playwright install
```

## Running the Tests Locally

  - To run UI and API tests in headless mode
  
  ```ts
  ENV=dev npx playwright test
  ```

  or 

  ```ts
  npx playwright test
  ```

 ![Test Result](../images/image1.png)


  - To run UI tests for a specific browser, e.g. Chromium

  ```ts
  ENV=dev npx playwright test ui/* --project=chromium
  ```

  ![Test Result](../images/image2.png)

  - To run API tests 
  
  ```ts
  ENV=dev npx playwright test api/*
  ```

  - To run a Specific Test File
  
  ```ts
  ENV=dev npx playwright test tests/example.test.ts
  ```
  
  - To run UI tests in headed mode, where you can visually observe the browser as it interacts with your app, just add the --headed flag to your test command:
  
  ```ts
  ENV=dev npx playwright test ui/* --headed
  ```
  
  🎯 What this does:
  - Launches the browser with a visible UI (instead of running headless)
  - Useful for debugging or observing animations, UI transitions, and dynamic behaviors
  
  🔧 Bonus: Combine with `--debug` for supercharged inspection
  
  ```ts
  ENV=dev npx playwright test ui/* --headed --debug
  ```
  
  - This opens the [Playwright Inspector](https://playwright.dev/docs/debug) so you can pause, step through, and review each action interactively.

  🧪 Using `.only()` for specific test(s), e.g.

  ```ts
  test.only('runs just this test', async () => {
    // Test logic here
  });

  test.only('another exclusive test', async () => {
    // Also runs if marked with .only
  });
  ```

  🧪 Optional: Open HTML Report

  - After running tests:

  ```ts 
  npx playwright show-report
  ```
  
  - See more details on [Reporters](https://playwright.dev/docs/test-reporters)
