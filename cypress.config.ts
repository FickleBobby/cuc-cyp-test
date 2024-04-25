import { defineConfig } from 'cypress';
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  retries: {
    runMode: 3,
    openMode: 0
  },
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/cucumber/features/**/*.feature',
  }
});
