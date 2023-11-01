const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://trello.com',
    viewportHeight: 500,
    viewportWidth: 1000,
    //experimentalModifyObstructiveThirdPartyCode : true,
    experimentalOriginDependencies: true,
  },
});
