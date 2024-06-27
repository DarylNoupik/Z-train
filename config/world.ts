import { Browser, chromium, Page } from "@playwright/test";
import {
  After,
  AfterStep,
  Before,
  BeforeStep,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import "./env";

let page: Page;
let browser: Browser;

setDefaultTimeout(60000);

Before(async () => {
  try {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
  } catch (error) {
    console.log(`chrome navigation to demo site failed due to ${error}`);
    throw new Error(`chrome navigation to demo site failed due to ${error}`);
  }
  return page;
});

After(async function (Scenario) {
  if (Scenario.result!.status === Status.FAILED) {
    await this.attach(
      await page.screenshot({
        path: `./screenshots/${Scenario.pickle.name}.png`,
        fullPage: true,
      }),
      "image/png"
    );
  }
  await browser.close();
});

BeforeStep(async () => {
  // Pauses before each step
  await page.waitForTimeout(1000); // 1 second pause
});

AfterStep(async () => {
  // Pauses after each step
  await page.waitForTimeout(1000); // 1 second pause
});

export { page, browser };
