import { APIRequestContext } from '@playwright/test';
import { config } from '@test.config';

export class UserClient {
  readonly request: APIRequestContext;
  readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = `${config.baseURL}/api`;
  }

  get getLoginUrl(): string {
    return `${this.baseUrl}/verifyLogin`;
  }

  async verifyLogin(email: string, password: string) {
    const res = await this.request.post(`${this.baseUrl}/verifyLogin`, {
      form: { email, password },
    });

    const body = await res.json();
    return body;
  }
}
