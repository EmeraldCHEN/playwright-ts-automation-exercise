import { APIRequestContext } from '@playwright/test';
import { config } from '@test.config';

export class UserClient {
  readonly request: APIRequestContext;
  readonly baseUrl: string;
  readonly password: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = `${config.baseURL}api`;
    this.password = `${config.password}`;
  }

  get getLoginUrl(): string {
    return `${this.baseUrl}/verifyLogin`;
  }

  get getPassword(): string {
    return `${this.password}`;
  }

  async verifyLogin(email: string, password: string) {
    const res = await this.request.post(`${this.baseUrl}/verifyLogin`, {
      form: { email, password },
    });

    const body = await res.json();
    return body;
  }
}
