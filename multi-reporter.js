
const report = require("multiple-cucumber-html-reporter");
const fs = require("fs")

function getBrowserDetails() {
  fs.readdir('./').then(listing => console.log(listing))
  .catch(err => console.error(err));
    return JSON.parse(fs.readFileSync("./browserDetails.json", "utf-8"));
}
const browserDetails = getBrowserDetails();
report.generate({
    jsonDir: "./cypress/e2e/reports/json",  // ** Path of .json file **//
    reportPath: "./cypress/e2e/reports/html/reports/multi",
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
