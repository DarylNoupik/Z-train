const reporter = require("cucumber-html-reporter");

let date = new Date();
var currentDate =
  date.getDate() +
  "_" +
  (date.getMonth() + 1) +
  "_" +
  date.getFullYear() +
  "_" +
  date.getHours() +
  "_" +
  date.getMinutes() +
  "_" +
  date.getSeconds() +
  "_" +
  date.getMilliseconds();

var options = {
  brandTitle: "demo test scenarios",
  theme: "bootstrap",
  jsonFile: "./reports/cucumber_report.json",
  output: "./reports/cucumber_report_" + currentDate + ".html",
  screenshotsDirectory: "./Screenshots/",
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.1.1",
    "Test Environnement": "QA",
    Platform: "Web/Angular",
    Sprint: "001",
  },
};

reporter.generate(options);
