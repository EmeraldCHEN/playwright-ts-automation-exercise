import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@BasePage';

export class SignupPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signupButton: Locator;
  readonly accountCreatedMessage: Locator;
  readonly continueButton: Locator;
  readonly accountDeletedMessage: Locator;
  readonly continueAfterAccountDeletionButton: Locator;

  constructor(page: Page) {
    super(page);

    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.passwordInput = page.locator('input[data-qa="password"]');  // adjust if needed
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.accountCreatedMessage = page.getByText('ACCOUNT CREATED!');
    this.continueButton = page.getByRole('link', { name: 'Continue' });

    // For account deletion (Step 19-20)
    this.accountDeletedMessage = page.getByText('ACCOUNT DELETED!');
    this.continueAfterAccountDeletionButton = page.getByRole('link', { name: 'Continue' });
  }

  async register(userData: { name: string; email: string; password: string; }) {
    await this.nameInput.fill(userData.name);
    await this.emailInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);
    await this.signupButton.click();
  }

  async continueAfterAccountCreation() {
    await this.continueButton.click();
  }

  async continueAfterAccountDeletion() {
    await this.continueAfterAccountDeletionButton.click();
  }
}
