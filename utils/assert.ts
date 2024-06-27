import { expect, Locator, Page } from "@playwright/test";

export default class Assert {
  constructor(private page: Page) {}

  async assertTitle(title: string | RegExp) {
    await expect(this.page).toHaveTitle(title);
  }

  async assertTitleContains(title: string) {
    const pageTitle = await this.page.title();
    expect(pageTitle).toContain(title);
  }

  async assertURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertURLContains(title: string) {
    const pageURL = this.page.url();
    expect(pageURL).toContain(title);
  }
  async assertTextContains(locator: Locator, text: string) {
    await expect(locator).toContainText(text, { timeout: 10000 });
  }
  async haveErrorMsg(locator: Locator, msg: string) {
    await expect(locator).toHaveText(msg);
  }

  async assertIsVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }
}
