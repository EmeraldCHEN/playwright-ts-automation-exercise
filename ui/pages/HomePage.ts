import { expect, Page, Locator } from '@playwright/test';
import { BasePage } from '@BasePage';

export class HomePage extends BasePage {
  readonly homeBanner: Locator;

  constructor(page: Page) {
    super(page); // initialize BasePage with page

    // The main carousel/banner area on the homepage
    this.homeBanner = page.locator('.carousel-inner');
  }

  readonly header = {
    cartLink: this.page.getByRole('link', { name: 'Cart' }),
    deleteAccountLink: this.page.getByRole('link', { name: 'Delete Account' }),
    loggedInText: (username: string) => this.page.getByText(`Logged in as ${username}`)
  };

  readonly products = {
    addToCartButtons: this.page.locator('.add-to-cart'),
    continueShoppingButton: this.page.getByRole('button', { name: 'Continue Shopping' }),
  };

  async addMultipleProductsToCart(count: number) {
    const addButtons = await this.products.addToCartButtons;
    const total = await addButtons.count();
    const limit = Math.min(count, total);

    for (let i = 0; i < limit; i++) {
      await addButtons.nth(i).click();
      await this.products.continueShoppingButton.click();
    }
  }

  async viewCart() {
    await this.header.cartLink.click();
  }

  async loggedInAs(username: string) {
    await expect(this.header.loggedInText(username)).toBeVisible();
  }

  async deleteAccount() {
    await this.header.deleteAccountLink.click();
  }
}