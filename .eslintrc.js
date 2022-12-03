module.exports = {
  root: true,
  globals: {
    assert: true,
  },
  ignorePatterns: [
    // '/static/scripts/autotrack.min.js'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@wiopriph/eslint-config'],
};
