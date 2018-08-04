const preset = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    preset,
    cssnano
  ]
};
