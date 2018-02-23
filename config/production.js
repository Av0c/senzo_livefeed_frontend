var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var base = require('./base');
var _ = require('lodash');

var productionConfig = {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    function () {
      this.plugin("done", function (stats) {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
          process.exit(1); // or throw new Error('webpack build failed.');
        }
      });
    },
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify("staging")
      }
    }),
    new HtmlWebpackPlugin(
      {
        template: 'src/index.html'
      }
    ),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'src/assets' }
    ])
  ]
};

module.exports = _.merge(base, productionConfig);