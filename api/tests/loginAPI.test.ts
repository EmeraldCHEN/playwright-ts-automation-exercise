import { test, expect, request } from '@playwright/test';
import { UserClient } from '@UserClient';

// Already created a new user via UI, since there's no public API for registration
test.describe('User API - Verify Login', () => {
  const validEmail = 'XYZABC@testy.com';

  test('API 7: POST To Verify Login with valid details', async ({ request }) => {
    const userClient = new UserClient(request);
    const response = await userClient.verifyLogin(validEmail, userClient.getPassword);

    expect(response.responseCode).toBe(200);
    expect(response.message).toBe('User exists!');
  });

  test('API 8: POST To Verify Login without email parameter', async ({ request }) => {
    const userClient = new UserClient(request);
    const res = await request.post(userClient.getLoginUrl, {
      form: {
        password: userClient.getPassword,
      },
    });

    const body = await res.json();
    expect(body.responseCode).toBe(400);
    expect(body.message).toBe('Bad request, email or password parameter is missing in POST request.');
  });

  test('API 9: DELETE To Verify Login', async ({ request }) => {
    const userClient = new UserClient(request);
    const res = await request.delete(userClient.getLoginUrl);

    const body = await res.json();
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
  });

  test('API 10: POST To Verify Login with invalid details', async ({ request }) => {
    const userClient = new UserClient(request);
    const res = await request.post(userClient.getLoginUrl, {
      form: {
        email: validEmail,
        password: 'wrongPassword',
      },
    });

    const body = await res.json();
    expect(body.responseCode).toBe(404);
    expect(body.message).toBe('User not found!');
  });
});