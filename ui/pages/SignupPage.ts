import { Locator, Page } from '@playwright/test';
import { BasePage } from '@BasePage';

export class SignupPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedMessage: Locator;
  readonly continueButton: Locator;
  readonly accountDeletedMessage: Locator;
  readonly continueAfterAccountDeletionButton: Locator;

  constructor(page: Page) {
    super(page);

    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.passwordInput = page.locator('input[data-qa="password"]'); 
    this.firstNameInput = page.locator('input[data-qa="first_name"]'); 
    this.lastNameInput = page.locator('input[data-qa="last_name"]'); 
    this.addressInput = page.locator('input[data-qa="address"]'); 
    this.stateInput = page.locator('input[data-qa="state"]'); 
    this.cityInput = page.locator('input[data-qa="city"]');
    this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedMessage = page.getByText('ACCOUNT CREATED!');
    this.continueButton = page.getByRole('link', { name: 'Continue' });

    // For account deletion (Step 19-20)
    this.accountDeletedMessage = page.getByText('ACCOUNT DELETED!');
    this.continueAfterAccountDeletionButton = page.getByRole('link', { name: 'Continue' });
  }

  // async login(userData: { name: string; email: string; password: string; }) {
  //   await this.nameInput.fill(userData.name);
  //   await this.emailInput.fill(userData.email);
  //   await this.passwordInput.fill(userData.password);
  //   await this.signupButton.click();
  // }

  
  async register(userData: { name: string; email: string;}) {
    await this.nameInput.fill(userData.name);
    await this.emailInput.fill(userData.email);
    await this.signupButton.click();
  }

  async enterAccountInfo(userData: { password: string; name: string; lastName: string; address: string; state: string; city: string; zip: string; mobile: string}) {
    await this.passwordInput.fill(userData.password);
    await this.firstNameInput.fill(userData.name);
    await this.lastNameInput.fill(userData.lastName);
    await this.addressInput.fill(userData.address);
    await this.stateInput.fill(userData.state);
    await this.cityInput.fill(userData.city);
    await this.zipcodeInput.fill(userData.zip);
    await this.mobileNumberInput.fill(userData.mobile);
  }

   async createAccount(){
    await this.createAccountButton.click();
   }

  async continueAfterAccountCreation() {
    await this.continueButton.click();
  }

  async continueAfterAccountDeletion() {
    await this.continueAfterAccountDeletionButton.click();
  }
}
