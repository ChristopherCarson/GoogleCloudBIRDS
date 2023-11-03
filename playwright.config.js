// playwright.config.js
module.exports = {
    // Look for test files in the "tests" directory
    testDir: 'tests',
    timeout: 15 * 60 * 10000,
    reporter: [['html', { open: 'never' }]],
    outputDir: "/tmp/playwright", // Disable test result output
    use: {
      // ...
      screenshots: false,
      video: false,
      trace: false,
    },
    // Configure other global settings here
    use: {
      headless: true, // Run tests in headless browsers
      // ... other options
    },
    // ... You can add more configurations here
  };
  