const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false, 
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    screenshotOnRunFailure: true, // This ensures screenshots are taken when a test fails
    baseUrl: "https://dev-user.localbet.xyz/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      
      // Custom logic to handle screenshot on test failure
      on('after:screenshot', (details) => {
        console.log(details); // You can log the screenshot details if needed
      });
    },
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  screenshotsFolder: "cypress/screenshots", // Define the folder to store screenshots
  env: {
    baseUrl: "https://dev-user.localbet.xyz/"
  }
});
