import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page.locator('.add-to-cart').first().click();
    await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
  }

  async viewCart() {
    await this.page.getByRole('link', { name: 'Cart' }).click();
  }

  async loggedInAs(username: string) {
    const loggedInText = await this.page.getByText(`Logged in as ${username}`);
    await expect(loggedInText).toBeVisible();
  }

  async deleteAccount() {
    await this.page.getByRole('link', { name: 'Delete Account' }).click();
  }
}
