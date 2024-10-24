import { ReportAggregator } from "wdio-html-nice-reporter";
let reportAggregator = new ReportAggregator();

import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getJsFiles = (dir) => {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".js"))
    .map((file) => join(dir, file));
};

const stepDefinitionsDir = join(__dirname, "../step-definitions");
const featuresDir = join(__dirname, "../support");
const stepDefinitionsFiles = getJsFiles(stepDefinitionsDir);
const featureFiles = getJsFiles(featuresDir);
const requireFiles = [...stepDefinitionsFiles, ...featureFiles];

export const config = {
  runner: "local",
  specs: [join(__dirname, "../*.feature")],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "http://localhost:8080",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "cucumber",
  reporters: [
    [
      "spec",
      {
        addConsoleLogs: true
      }
    ],
    [
      "html-nice",
      {
        debug: false,
        outputDir: "./reports/html-reports/",
        filename: "report.html",
        reportTitle: "Web Test Report",
        showInBrowser: false,
        useOnAfterCommandForScreenshot: false,
        linkScreenshots: true
      }
    ]
  ],
  cucumberOpts: {
    require: requireFiles,
    backtrace: false,
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: process.env.TAG_EXPRESSION || "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },
  onPrepare: function (config, capabilities) {
    reportAggregator = new ReportAggregator({
      outputDir: "../../reports/html-reports/",
      filename: process.env.TEST_BROWSER + "-master-report.html",
      reportTitle: "Micro-Magic Web Test Report",
      browserName: process.env.TEST_BROWSER ? process.env.TEST_BROWSER : "unspecified",
      showInBrowser: true
    });
    reportAggregator.clean();
  },
  onComplete: async function (exitCode, config, capabilities, results) {
    await reportAggregator.createReport();
  }
};
