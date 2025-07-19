import { expect, Page } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async register(userData: { name: string; email: string; password: string; address: string }) {
    await this.page.getByPlaceholder('Name').fill(userData.name);
    await this.page.getByPlaceholder('Email Address').fill(userData.email);
    await this.page.getByRole('button', { name: 'Signup' }).click();

    // Continue filling additional form fields (password, address, etc.)
    await this.page.getByPlaceholder('Password').fill(userData.password);
    await this.page.getByPlaceholder('Address').fill(userData.address);

    await this.page.getByRole('button', { name: 'Create Account' }).click();
  }

  async accountCreatedMessage() {
    await expect(this.page.getByText('ACCOUNT CREATED!')).toBeVisible();
  }

  async continueAfterAccountCreation() {
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }

  async accountDeletedMessage() {
    await expect(this.page.getByText('ACCOUNT DELETED!')).toBeVisible();
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}
