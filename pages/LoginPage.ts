import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  readonly msgError: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator("#email_login");
    this.passwordInput = page.locator("#password_login");
    this.loginButton = page.locator("#btn_login");
    this.msgError = page.locator(".style_messageError__mbzDa");
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }
  async performLogin() {
    await this.loginButton.click();
  }
}
