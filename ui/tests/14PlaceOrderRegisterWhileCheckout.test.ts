import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { SignupPage } from '../pages/SignupPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '@PaymentPage';
import { faker } from '@faker-js/faker';

test('Test Case 14: Place Order - Register while Checkout', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const signupPage = new SignupPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);

  // Test data
  const userData = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.location.streetAddress(),
    state: 'Auckland',
    city: 'Auckland',
    zip: '1010',
    mobile: faker.phone.number('02########'),
    comment: 'Please deliver ASAP',
    cardName: faker.person.fullName(),
    cardNumber: '4111111111111111',
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2026'
  };

  // 1-3. Launch & Navigate
  await homePage.goto();
  await expect(homePage.homeBanner).toBeVisible();

  // 4-5. Add products to cart and go to cart
  await homePage.addFirstProductToCart();
  await homePage.viewCart();

  // 6. Verify cart page
  await expect(cartPage.cartHeader).toContainText('Shopping Cart');

  // 7. Click Proceed to Checkout
  await cartPage.proceedToCheckout();

  // 8. Click Register/Login
  await cartPage.clickRegisterLogin();

  // 9. Fill details and create account
  await signupPage.register(userData);

  // 10. Verify account created
  await expect(signupPage.accountCreatedMessage).toHaveText('ACCOUNT CREATED!');
  await signupPage.continueAfterAccountCreation();

  // 11. Verify user is logged in
  await expect(homePage.loggedInAs).toContainText(userData.name);

  // 12-13. Go back to cart and checkout
  await homePage.viewCart();
  await cartPage.proceedToCheckout();

  // 14. Verify address and review order
  await checkoutPage.verifyAddress(userData);
  await checkoutPage.addComment(userData.comment);
  await checkoutPage.placeOrder();

  // 16. Enter payment details
  await paymentPage.enterPaymentDetails({
    name: userData.cardName,
    cardNumber: userData.cardNumber,
    cvc: userData.cvc,
    expiryMonth: userData.expiryMonth,
    expiryYear: userData.expiryYear
  });

  // 17. Click confirm
  await paymentPage.confirmOrder();

  // 18. Verify success message
  await expect(paymentPage.successMessage).toContainText('Your order has been placed successfully!');

  // 19-20. Delete account
  await homePage.deleteAccount();
  await expect(signupPage.accountDeletedMessage).toHaveText('ACCOUNT DELETED!');
  await signupPage.continueAfterAccountDeletion();
});
