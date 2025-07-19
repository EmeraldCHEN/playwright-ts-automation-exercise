import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@BasePage';

export class CheckoutPage extends BasePage {
  readonly deliveryAddressBoxName: Locator;
  readonly billingAddressBox: Locator;
  readonly reviewOrderBox: Locator;
  readonly commentInput: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    super(page);

    this.deliveryAddressBoxName = page.locator('li.address_firstname.address_lastname').first(); 
    this.billingAddressBox = page.locator('h2:has-text("Billing Address")').locator('..');
    this.reviewOrderBox = page.locator('.order_info');  // example selector, adjust as needed

    this.commentInput = page.locator('textarea[name="message"]');
    this.placeOrderButton = page.locator('.btn.btn-default.check_out'); 
  }

  async verifyAddress(userData: { name: string; address: string; city: string; state: string; zip: string; mobile: string; }) {
    await expect(this.deliveryAddressBoxName).toContainText(userData.name);
    // await expect(this.deliveryAddressBox).toContainText(userData.address);
    // await expect(this.deliveryAddressBox).toContainText(userData.city);
    // await expect(this.deliveryAddressBox).toContainText(userData.state);
    // await expect(this.deliveryAddressBox).toContainText(userData.zip);
    // await expect(this.deliveryAddressBox).toContainText(userData.mobile);

    // await expect(this.billingAddressBox).toContainText(userData.name);
    // await expect(this.billingAddressBox).toContainText(userData.address);
    // await expect(this.billingAddressBox).toContainText(userData.city);
    // await expect(this.billingAddressBox).toContainText(userData.state);
    // await expect(this.billingAddressBox).toContainText(userData.zip);
    // await expect(this.billingAddressBox).toContainText(userData.mobile);
  }

  async addComment(comment: string) {
    await this.commentInput.fill(comment);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}
