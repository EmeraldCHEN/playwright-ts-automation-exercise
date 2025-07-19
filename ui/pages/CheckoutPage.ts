import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@BasePage';

export class CheckoutPage extends BasePage {
  readonly deliveryAddressBox: Locator;
  readonly billingAddressBox: Locator;
  readonly reviewOrderBox: Locator;
  readonly commentInput: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    super(page);

    // Adjust selectors based on actual page structure
    this.deliveryAddressBox = page.locator('h2:has-text("Delivery Address")').locator('..'); 
    this.billingAddressBox = page.locator('h2:has-text("Billing Address")').locator('..');
    this.reviewOrderBox = page.locator('.order_info');  // example selector, adjust as needed

    this.commentInput = page.locator('textarea[name="message"]');
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }

  async verifyAddress(userData: { name: string; address: string; city: string; state: string; zip: string; mobile: string; }) {
    await expect(this.deliveryAddressBox).toContainText(userData.name);
    await expect(this.deliveryAddressBox).toContainText(userData.address);
    await expect(this.deliveryAddressBox).toContainText(userData.city);
    await expect(this.deliveryAddressBox).toContainText(userData.state);
    await expect(this.deliveryAddressBox).toContainText(userData.zip);
    await expect(this.deliveryAddressBox).toContainText(userData.mobile);

    await expect(this.billingAddressBox).toContainText(userData.name);
    await expect(this.billingAddressBox).toContainText(userData.address);
    await expect(this.billingAddressBox).toContainText(userData.city);
    await expect(this.billingAddressBox).toContainText(userData.state);
    await expect(this.billingAddressBox).toContainText(userData.zip);
    await expect(this.billingAddressBox).toContainText(userData.mobile);
  }

  async addComment(comment: string) {
    await this.commentInput.fill(comment);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}
