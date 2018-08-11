const preset = require('postcss-preset-env');
const apply = require('postcss-apply');
const cssnano = require('cssnano');
const importPlugin = require('postcss-import');

module.exports = {
  plugins: [
    importPlugin,
    apply,
    preset({
      stage: 0
    }),
    cssnano
  ]
};
