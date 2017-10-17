var base = require('./base');
var _ = require('lodash');
var webpack = require('webpack');

var devConfig = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    proxy: {

    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = _.merge(base, devConfig);