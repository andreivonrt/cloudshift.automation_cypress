const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cloudshift.uat.digitalrecruiter.net/",
  },
  env: {
    login_url: "auth/login",
  },
  video: true,
  defaultCommandTimeout: 10000
});
