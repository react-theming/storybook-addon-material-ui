const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  extends: ['eslint-config-airbnb', 'plugin:jest/recommended', 'prettier'],
  plugins: ['prettier', 'jest', 'json'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    'jest/globals': true
  },
  rules: {
    'no-console': ignore,
    'react/jsx-filename-extension': ignore,
    'react/destructuring-assignment': ignore,
  }
};
