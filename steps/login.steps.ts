import { Given, Then, When } from "@cucumber/cucumber";
import { page } from "../config/world";
import { pageUrl } from "../utils/navigation";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import Assert from "../utils/assert";
import * as fs from "fs";

let assert: Assert;
let homePage: HomePage;
let loginPage: LoginPage;
const login = "./datas/login.json";
const invalidLogin = "./datas/invalidLogin.json";
const datasets = JSON.parse(fs.readFileSync(login, "utf-8"));
const invalidDatasets = JSON.parse(fs.readFileSync(invalidLogin, "utf-8"));

Given("Je suis sur l'onglet connexion", async () => {
  assert = new Assert(page);
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await homePage.navigate(pageUrl("homepage"));
  await homePage.clickOnUserModal();
  await homePage.clickOnLogin();
});

When("Je saisis des identifiants valides", async () => {
  await loginPage.enterEmail(datasets.email);
  await loginPage.enterPassword(datasets.password);
});

When("Je clique sur connexion", async () => {
  await loginPage.performLogin();
  await page.waitForTimeout(3000);
});

Then(
  "Je devrais être redirigé vers HomePage en tant utilisateur connecte apres la connexion",
  function () {
    assert.assertURL("https://ztrain-web.vercel.app/home");
    assert.assertTextContains(homePage.userModalButton, datasets.email);
  }
);

When("Je saisis des identifiants invalides", async () => {
  await loginPage.enterEmail(invalidDatasets.email);
  await loginPage.enterPassword(invalidDatasets.password);
});

Then(
  "Un message d'erreur devrait s'afficher sur l'onglet connexion",
  async () => {
    await assert.assertIsVisible(loginPage.msgError);
  }
);
