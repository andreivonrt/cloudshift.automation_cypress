const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cloudshift.uat.digitalrecruiter.net/",
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
  },
  env: {
    login_url: "user/login",
    baseUrl: "https://cloudshift.uat.digitalrecruiter.net/",
  },
  video: true,
  defaultCommandTimeout: 15000,
  chromeWebSecurity: false,
});
