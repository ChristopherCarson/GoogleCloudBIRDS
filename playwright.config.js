// playwright.config.js
module.exports = {
    // Look for test files in the "tests" directory
    testDir: 'tests',
    timeout: 25 * 60 * 10000,
    reporter: [],
    outputDir: "/tmp/playwright", // Disable test result output
    use: {
      // ...
      screenshots: false,
      video: false,
      trace: false,
    },
    // Configure other global settings here
    use: {
      headless: false, // Run tests in headless browsers
      // ... other options
    },
    // ... You can add more configurations here
  };
  