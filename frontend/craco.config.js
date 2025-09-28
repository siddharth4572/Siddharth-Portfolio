// Load configuration from environment or config file
const path = require('path');

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === 'true',
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Add a rule to ignore source map warnings from specific packages
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        function ignoreSourcemapsloaderWarnings(warning) {
          return warning.module && warning.module.resource.includes('@mediapipe/tasks-vision') && warning.details && warning.details.includes('source-map-loader');
        },
      ];
      
      // Set default watch options to reduce watched directories
      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: [
          '**/node_modules/**',
          '**/build/**',
          '**/dist/**',
          '**/coverage/**',
        ],
      };

      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });
      }
      
      return webpackConfig;
    },
  },
};