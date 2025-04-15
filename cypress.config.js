const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Project configuration
  projectId: 'your-project-id', // Optional: For Cypress Cloud integration

  // Test configuration
  e2e: {
    // Base URL for all tests
    baseUrl: 'https://example.com',

    // File patterns for test files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Support file location
    supportFile: 'cypress/support/e2e.js',

    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,

    // Video recording settings
    video: true,
    videoCompression: 32,

    // Screenshot settings
    screenshotOnRunFailure: true,

    // Retry settings
    retries: {
      runMode: 2,    // Retry failed tests in run mode
      openMode: 0    // No retries in open mode
    },

    // Environment variables
    env: {
      // Add your environment variables here
      apiUrl: 'https://api.example.com'
    },

    // Setup node events
    setupNodeEvents(on, config) {
      // Add custom plugins here
      return config
    },
    experimentalStudio: true,
    experimentalInteractiveRunEvents: true
  },
});
