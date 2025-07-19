import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async verifyAddress(userData: { name: string; address: string }) {
    await expect(this.page.getByText(userData.name)).toBeVisible();
    await expect(this.page.getByText(userData.address)).toBeVisible();
  }

  async addComment(comment: string) {
    await this.page.locator('textarea[name="message"]').fill(comment);
  }

  async placeOrder() {
    await this.page.getByRole('button', { name: 'Place Order' }).click();
  }
}
