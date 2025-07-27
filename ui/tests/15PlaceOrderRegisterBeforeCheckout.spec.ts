import { test, expect } from '@playwright/test';
import { config } from '@test.config';
import { Navbar } from '@Navbar';
import { HomePage } from '@HomePage';
import { CartPage } from '@CartPage';
import { SignupPage } from '@SignupPage';
import { CheckoutPage } from '@CheckoutPage';
import { PaymentPage } from '@PaymentPage';
import { generateUserData } from '@test-data/userData';

test('Test Case 15: Place Order - Register before Checkout', async ({
  page,
}) => {
  const navbar = new Navbar(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const signupPage = new SignupPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);
  const userData = generateUserData();

  // Step 1-3: Launch browser & Navigate to home page & Verify that home page is visible successfully
  await homePage.navigateTo(config.baseURL);
  await expect(homePage.homeBanner).toBeVisible();

  // Step 4: Click 'Signup / Login' button
  await navbar.clickSignupOrLoginButton();

  // Step 5: Fill all details in Signup and create account
  await signupPage.register(userData);
  await signupPage.enterAccountInfo(userData);
  await signupPage.createAccount();

  // Step 6: Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await expect(signupPage.accountCreatedMessage).toBeVisible();
  await signupPage.continueAfterAccountCreation();

  // Step 7: Verify ' Logged in as username' at top
  await homePage.loggedInAs(userData.name);

  // Step 8-9: Add products to cart & Click 'Cart' button
  await homePage.addMultipleProductsToCart(1); // Add first 1 product to cart for now, update test to handle multiple products when time permits
  await homePage.viewCart();

  // Step 10: Verify that cart page is displayed
  await cartPage.verifyCartPageDisplayed();

  // Step 11: Click Proceed To Checkout
  await cartPage.proceedToCheckout();

  // Step 12: Verify Address Details and Review Your Order
  await checkoutPage.verifyAddress(userData);

  // Step 13: Enter description in comment text area and click 'Place Order'
  await checkoutPage.addComment(userData.comment);
  await checkoutPage.placeOrder();

  // Step 14: Enter payment details: Name on Card, Card Number, CVC, Expiration date
  await paymentPage.enterPaymentDetails({
    name: userData.cardName,
    cardNumber: userData.cardNumber,
    cvc: userData.cvc,
    expiryMonth: userData.expiryMonth,
    expiryYear: userData.expiryYear,
  });

  // Step 15: Click 'Pay and Confirm Order' button
  await paymentPage.confirmOrder();

  // Step 16: Verify success message 'Your order has been placed successfully!'
  await paymentPage.verifySuccessMessage();

  // Step 17: Click 'Delete Account' button
  await homePage.deleteAccount();

  // Step 18: Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await expect(signupPage.accountDeletedMessage).toBeVisible();
  await signupPage.continueAfterAccountDeletion();
});
