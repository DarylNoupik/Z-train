import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly userModalButton: Locator;
  readonly registerButton: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userModalButton = page.locator("#style_avatar_wrapper__pEGIQ");
    this.loginButton = page.getByRole("tab", { name: "Connexion" });
    this.registerButton = page.getByRole("tab", { name: "Inscription" });
  }

  async clickOnUserModal() {
    await this.userModalButton.click();
  }

  async clickOnLogin() {
    await this.loginButton.click();
  }
  async clickOnRegister() {
    await this.registerButton.click();
  }
}
