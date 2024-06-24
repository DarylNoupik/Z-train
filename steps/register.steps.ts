import { Given, Then, When } from "@cucumber/cucumber";
import { page } from "../config/world";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import Assert from "../utils/assert";
import * as fs from "fs";
import "../config/env";
import { pageUrl } from "../utils/navigation";

let assert: Assert;
let homePage: HomePage;
let registerPage: RegisterPage;
const validData = "./datas/register.json";
const inValidData = "./datas/invalidData.json";
const datasets = JSON.parse(fs.readFileSync(validData, "utf-8"));
const datasetsInvalid = JSON.parse(fs.readFileSync(inValidData, "utf-8"));

Given("Je suis sur l'onglet {string}", async (pageName) => {
  assert = new Assert(page);
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  await homePage.navigate(pageUrl("homepage"));
  await homePage.clickOnUserModal();
  await homePage.clickOnRegister();
});

When("Je saisis des informations valides", async () => {
  await registerPage.enterEmail(datasets.email);
  await registerPage.enterPassword(datasets.password);
  await registerPage.enterRePassword(datasets.rePassword);
});

When("Je clique sur inscription", async () => {
  await registerPage.performRegister();
  await page.waitForTimeout(3000);
});

Then(
  "Je devrais être redirigé vers HomePage en tant utilisateur connecte",
  async () => {
    assert.assertURL("https://ztrain-web.vercel.app/home");
    assert.assertTextContains(homePage.userModalButton, datasets.email);
  }
);

When("Je saisis des informations invalides", async () => {
  await registerPage.enterEmail(datasetsInvalid.email);
  await registerPage.enterPassword(datasetsInvalid.password);
  await registerPage.enterRePassword(datasetsInvalid.rePassword);
});
Then("Un message d'erreur devrait s'afficher", async () => {
  await assert.assertIsVisible(registerPage.msgError);
});
