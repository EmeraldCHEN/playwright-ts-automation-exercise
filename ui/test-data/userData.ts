import { faker } from '@faker-js/faker';

export function generateUserData() {
  return {
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.location.streetAddress(),
    state: 'Auckland',
    city: 'Auckland',
    zip: '1010',
    mobile: faker.helpers.replaceSymbols('02########'),
    comment: 'Please deliver ASAP',
    cardName: faker.person.fullName(),
    cardNumber: '4111111111111111', // Test Visa number
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2026',
  };
}
