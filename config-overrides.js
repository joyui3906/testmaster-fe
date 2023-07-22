const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@src']: path.resolve(__dirname, './src'),
    ['@const']: path.resolve(__dirname, './src/constants'),
    ['@assets']: path.resolve(__dirname, './src/assets'),
    ['@hooks']: path.resolve(__dirname, './src/hooks'),
    ['@mocks']: path.resolve(__dirname, './apis/mocks'),
    ['@apis']: path.resolve(__dirname, './apis'),
    ['@styles']: path.resolve(__dirname, './src/styles'),
    ['@static']: path.resolve(__dirname, './src/static'),
    ['@axios']: path.resolve(__dirname, './src/utils/axios'),
  }),
);
