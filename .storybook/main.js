// .storybook/main.js

const path = require('path');
const custom = require('./webpack.config.js');

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  }
};
