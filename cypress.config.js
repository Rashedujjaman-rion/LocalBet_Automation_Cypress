const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://dev-user.localbet.xyz/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  env: {
    baseUrl: "https://dev-user.localbet.xyz/"
  },
});
