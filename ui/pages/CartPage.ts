import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async proceedToCheckout() {
    await this.page.getByRole('link', { name: 'Proceed To Checkout' }).click();
  }

  async clickRegisterLogin() {
    await this.page.getByRole('link', { name: 'Register / Login' }).click();
  }
}
