/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const path = require('path');

const withLess = require('next-with-less');

const plugins = [[withLess]];

module.exports = withPlugins(plugins, {
  webpack(config) {
    config.module.rules[2].oneOf.forEach(one => {
      if (!`${one.issuer?.and}`.includes('_app')) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
});
