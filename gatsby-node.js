/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const webpack = require('webpack');

function modifyConfigsForIe({ stage, config }) {
  if (stage === 'develop') {
    if (config.entry.commons) {
      // NOTE: replace 'event-source-polyfill' with 'eventsource-polyfill' as it
      // doesn't work in ie11 because it doesn't expose 'EventSource' to window.
      config.entry.commons[0] = 'eventsource-polyfill';
    }
    config.plugins.push(
      // NOTE: This is required as Promise is used in hot module update and the HMR
      // codes are invoked earlier than other polyfill codes. So at least Promise
      // polyfill should be executed before hot module update codes.
      new webpack.ProvidePlugin({
        Promise: 'es6-promise',
      })
    );
  }
}

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const config = getConfig();
  const defaultBabelLoaderConfig = loaders.js();

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        ...defaultBabelLoaderConfig,
        options: {
          ...defaultBabelLoaderConfig.options,
          configFile: path.join(__dirname, './babel.config.js'),
        },
      },
    ],
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    'project-root': path.join(__dirname, '.'),
  };

  modifyConfigsForIe({ stage, config });

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);
};

exports.resolvableExtensions = () => [`.ts`, `.tsx`];
