# 🧠 Timeout Scopes in Playwright

Playwright allows you to set a global timeout and `expect` timeout in your config. 

Here's a breakdown of how timeouts are scoped and configured in different contexts:

| **Context**                             | **Timeout Source**                                       | **Default** |
|----------------------------------------|----------------------------------------------------------|-------------|
| Test as a whole                        | `timeout` in `defineConfig` or `test.setTimeout()`       | `30000ms`   |
| Locator actions (`click`, `fill`, etc) | `page.setDefaultTimeout()`                               | `30000ms`   |
| Assertions like `expect().toBeVisible()`| Needs its own explicit timeout                           | `5000ms`    |


- Referece: [Timeouts](https://playwright.dev/docs/test-timeouts)

*This file was generated with assistance from AI.*