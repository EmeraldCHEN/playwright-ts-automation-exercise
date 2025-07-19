import { test, expect } from '@playwright/test';
import { config } from '@test.config';
import { HomePage } from '@HomePage';
import { CartPage } from '@CartPage';
import { SignupPage } from '@SignupPage';
import { CheckoutPage } from '@CheckoutPage';
import { PaymentPage } from '@PaymentPage';
import { generateUserData } from '@test-data/userData';

test('Test Case 14: Place Order - Register while Checkout', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const signupPage = new SignupPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);
  const userData = generateUserData();

  // Step 1-3: Launch browser & Navigate to home page & Verify that home page is visible successfully
  await homePage.navigateTo(config.baseURL);
  await expect(homePage.homeBanner).toBeVisible({ timeout: 10000 });

  // Step 4-5: Add products to cart & Click 'Cart' button
  await homePage.addMultipleProductsToCart(2); // Adds first 2 products to cart
  await homePage.viewCart();

  // Step 6: Verify that cart page is displayed
  await cartPage.verifyCartPageDisplayed();

  // Step 7: Click Proceed To Checkout
  await cartPage.proceedToCheckout();

  // Step 8: Click 'Register / Login' button
  await cartPage.clickRegisterLogin();

  // Step 9: Fill all details in Signup and create account
  await signupPage.register(userData);

  // Step 10: Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await expect(signupPage.accountCreatedMessage).toBeVisible();
  await signupPage.continueAfterAccountCreation();
  await expect(signupPage.accountCreatedMessage).toHaveText('ACCOUNT CREATED!');

  // Step 11: Verify 'Logged in as username' at top
  await homePage.loggedInAs(userData.name);

  // Step 12-13: Click 'Cart' button and then 'Proceed To Checkout' button
  await homePage.viewCart();
  await cartPage.proceedToCheckout();

  // Step 14: Verify address details and review the order
  await checkoutPage.verifyAddress(userData);

  // Step 15: Enter description in comment text area and click 'Place Order'
  await checkoutPage.addComment(userData.comment); 
  await checkoutPage.placeOrder();

  // Step 16: Enter payment details: Name on Card, Card Number, CVC, Expiration date
  await paymentPage.enterPaymentDetails({
  name: userData.cardName,
  cardNumber: userData.cardNumber,
  cvc: userData.cvc,
  expiryMonth: userData.expiryMonth,
  expiryYear: userData.expiryYear,
});

  // Step 17: Click 'Pay and Confirm Order' button
  await paymentPage.confirmOrder();

  // Step 18: Verify success message 'Your order has been placed successfully!'
  await paymentPage.verifySuccessMessage();

  // Step 19: Click 'Delete Account' button
  await homePage.deleteAccount();

  // Step 20: Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await expect(signupPage.accountDeletedMessage).toBeVisible();
  await signupPage.continueAfterAccountDeletion();
});
