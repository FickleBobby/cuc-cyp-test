
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "./cypress/e2e/reports/json",  // ** Path of .json file **//
    reportPath: "./cypress/e2e/reports/html/multi",
    useCDN: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "121",
        },
        device: "Stage",
        platform: {
            name: "unix",
        },
    },
});