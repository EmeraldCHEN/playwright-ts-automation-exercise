import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@BasePage';

export class Navbar extends BasePage {
  readonly signupOrLoginNav: Locator;

  constructor(page: Page) {
    super(page);

    this.signupOrLoginNav = page.locator('input[name="name_on_card"]');
  }

  async clickSignupOrLoginButton() {
    await this.page.getByRole('link', { name: ' Signup / Login' }).click();
  }
}
