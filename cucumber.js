//cucumber js
let options = [
  "--require-module ts-node/register", //Load TypeScript module
  "--require ./steps/*.steps.ts", // Load step definitions
  "--format progress", //load custom formatter
  "--format json:./reports/cucumber_report.json",
  "--format @cucumber/pretty-formatter", // Format pour l'intégration avec Allure
  "--format message:./allure-results/results.ndjson", // Format pour Allure
].join(" ");

let run_features = [
  "./features/", //Specify our feature files
  options,
].join(" ");

module.exports = {
  test_runner: run_features,
};
