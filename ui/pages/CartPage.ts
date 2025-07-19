import { expect, Page, Locator } from '@playwright/test';
import { BasePage } from '@BasePage';

export class CartPage extends BasePage {
  readonly cartTitle: Locator;
  readonly cartTable: Locator;
  readonly proceedToCheckoutButton: Locator;
  readonly registerLoginButton: Locator;

  constructor(page: Page) {
    super(page);

    // Common cart elements
    this.cartTitle = page.getByText('Shopping Cart');
    this.cartTable = page.locator('#cart_info_table');
    this.proceedToCheckoutButton = page.getByRole('button', { name: 'Proceed To Checkout' });
    this.registerLoginButton = page.getByRole('link', { name: 'Register / Login' });
  }

  async verifyCartPageDisplayed() {
    await expect(this.cartTitle).toBeVisible();
    await expect(this.cartTable).toBeVisible();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async clickRegisterLogin() {
    await this.registerLoginButton.click();
  }
}
