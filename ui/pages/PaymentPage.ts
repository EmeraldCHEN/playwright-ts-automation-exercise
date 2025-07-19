import { expect, Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  async enterPaymentDetails(data: {
    name: string;
    cardNumber: string;
    cvc: string;
    expiryMonth: string;
    expiryYear: string;
  }) {
    await this.page.getByPlaceholder('Name on Card').fill(data.name);
    await this.page.getByPlaceholder('Card Number').fill(data.cardNumber);
    await this.page.getByPlaceholder('CVC').fill(data.cvc);
    await this.page.getByPlaceholder('MM').fill(data.expiryMonth);
    await this.page.getByPlaceholder('YYYY').fill(data.expiryYear);
  }

  async confirmOrder() {
    await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  }

  async successMessage() {
    await expect(this.page.getByText('Your order has been placed successfully!')).toBeVisible();
  }
}
