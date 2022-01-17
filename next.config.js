/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const path = require('path');
const CompanyConfig = require('./src/styles/company.js');

const withLess = require('next-with-less');

const wLess = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: { ...CompanyConfig.colors },
    },
  },
});

const plugins = [[wLess]];

module.exports = withPlugins(plugins, {
  webpack(config) {
    config.module.rules[2].oneOf.forEach(one => {
      if (!`${one.issuer?.and}`.includes('_app')) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
});
