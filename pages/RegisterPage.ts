import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmInput: Locator;

  readonly signUpButton: Locator;

  readonly msgError: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator("#email_register");
    this.passwordInput = page.locator("#password_register");
    this.confirmInput = page.locator("#confirm_password_register");
    this.signUpButton = page.locator("#btn_register");
    this.msgError = page.locator(".style_messageError__mbzDa");
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }
  async enterRePassword(rePassword: string) {
    await this.confirmInput.fill(rePassword);
  }

  async performRegister() {
    await this.signUpButton.click();
  }
}
