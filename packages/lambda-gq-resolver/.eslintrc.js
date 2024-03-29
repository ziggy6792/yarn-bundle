const baseConfig = require('../../.eslintrc.js');

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true,
  },
  rules: {
    ...baseConfig.rules,
    'no-underscore-dangle': 'off',
  },
};
