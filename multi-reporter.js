
const report = require("multiple-cucumber-html-reporter");
const fs = require("fs")
var path = require('path');

function fileList(dir) {
  return fs.readdirSync(dir).reduce(function(list, file) {
    var name = path.join(dir, file);
    var isDir = fs.statSync(name).isDirectory();
    return list.concat(isDir ? fileList(name) : [name]);
  }, []);
}

function getBrowserDetails() {

    return JSON.parse(fs.readFileSync("./browserDetails.json", "utf-8"));
}
//const browserDetails = getBrowserDetails();
console.log(fileList('./'))
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
