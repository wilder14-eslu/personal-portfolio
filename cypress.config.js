import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';
import path from 'path';

// Run the dev server (npm run dev) before cypress:run. If Vite uses a different port, set CYPRESS_BASE_URL (e.g. http://localhost:5174).
export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:5173',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on) {
      // Keep the headless browser screen larger than our largest screenshot viewport.
      // https://docs.cypress.io/api/node-events/browser-launch-api
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.isHeadless && browser.name === 'electron') {
          launchOptions.preferences.width = 1600;
          launchOptions.preferences.height = 1200;
        } else if (browser.isHeadless && browser.family === 'chromium') {
          launchOptions.args.push('--window-size=1600,1200');
          launchOptions.args.push('--force-device-scale-factor=1');
        }
        return launchOptions;
      });
      on(
        'file:preprocessor',
        vitePreprocessor({
          configFile: path.resolve('./vite.config.js'),
          mode: 'development',
        })
      );
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
});
