import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@BasePage';

export class PaymentPage extends BasePage {
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payAndConfirmButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.nameOnCardInput = page.locator('input[name="name_on_card"]');
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.cvcInput = page.locator('input[name="cvc"]');
    this.expiryMonthInput = page.locator('input[name="expiry_month"]');
    this.expiryYearInput = page.locator('input[name="expiry_year"]');
    this.payAndConfirmButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
    this.successMessage = page.getByText('Your order has been placed successfully!');
  }

  async enterPaymentDetails(details: { name: string; cardNumber: string; cvc: string; expiryMonth: string; expiryYear: string; }) {
    await this.nameOnCardInput.fill(details.name);
    await this.cardNumberInput.fill(details.cardNumber);
    await this.cvcInput.fill(details.cvc);
    await this.expiryMonthInput.fill(details.expiryMonth);
    await this.expiryYearInput.fill(details.expiryYear);
  }

  async confirmOrder() {
    await this.payAndConfirmButton.click();
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
  }
}
