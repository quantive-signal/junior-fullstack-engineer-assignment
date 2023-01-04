/* eslint-env node */
/* eslint import/no-nodejs-modules:0 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-nodejs-modules
const path = require('path');
const webpack = require('webpack');

const staticPrefix = path.join(__dirname, 'static');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const CLIFF_EXPERIMENTAL_SPA = true;

module.exports = {
  entry: './static/app/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/_assets/',
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '6001',
    static: {
      publicPath: '/_assets/',
      directory: path.join(__dirname, 'static'),
    },
    historyApiFallback: {
      rewrites: [{from: /^\/.*$/, to: '/_assets/index.html'}],
    },
    open: true,
    hot: true,
    liveReload: true,
    proxy: [
      {
        context: ['/api/', '/avatar/', '/organization-avatar/'],
        target: 'https://sentry.io',
        secure: false,
        changeOrigin: true,
        headers: {
          Referer: 'https://sentry.io/',
        },
      },
    ],
  },
  resolve: {
    alias: {
      cliff: path.join(staticPrefix, 'app'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'static', 'index.ejs'),
      title: 'quantive-signal assignment boilerplate',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, './config/tsconfig.build.json'),
        configOverwrite: {
          compilerOptions: {incremental: true},
        },
        memoryLimit: 3072,
      },
      devServer: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        EXPERIMENTAL_SPA: JSON.stringify(CLIFF_EXPERIMENTAL_SPA),
      },
    }),
  ],
};
