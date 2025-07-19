import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@BasePage';

export class CheckoutPage extends BasePage {
  readonly deliveryAddressBoxName: Locator;
  readonly billingAddressBoxName: Locator;
  readonly reviewOrderBox: Locator;
  readonly commentInput: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    super(page);

    this.deliveryAddressBoxName = page.locator('li.address_firstname.address_lastname').first(); 
    this.billingAddressBoxName = page.locator('li.address_firstname.address_lastname').last(); 
    this.reviewOrderBox = page.locator('.order_info');
    this.commentInput = page.locator('textarea[name="message"]');
    this.placeOrderButton = page.locator('.btn.btn-default.check_out'); 
  }

  // Verify the name for now, expand assertions to cover additional details when time permits
  async verifyAddress(userData: { name: string; address: string; city: string; state: string; zip: string; mobile: string; }) {
    await expect(this.deliveryAddressBoxName).toContainText(userData.name);
    await expect(this.billingAddressBoxName).toContainText(userData.name);
  }

  async addComment(comment: string) {
    await this.commentInput.fill(comment);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}
