const { defineConfig } = require("cypress");
const env = require("./cypress.env.json");

const isLocal = env.ENVIRONMENT === "local";

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost:3000",
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
    video: isLocal,
    screenshotsFolder: isLocal ? "cypress/screenshots" : false,
  },
});
