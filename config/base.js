var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var PATHS = {
  input: path.join(__dirname, '/../src'),
  output: path.join('build')
};

var config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: PATHS.output,
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: PATHS.input + '/config/' + (process.env.NODE_ENV || 'development') + '.js',
      actions: PATHS.input + '/actions',
      reducers: PATHS.input + '/reducers',
      components: PATHS.input + '/components',
      containers: PATHS.input + '/containers',
      images: PATHS.input + '/img'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      },
      { test: /\.json$/, loader: 'json' }
    ],
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        include: PATHS.input
      },
      {
        test: /(\.css)$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(ttf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url?prefix=font/&limit=5000"
      },
      {
        test: /\/favicon.ico$/,
        include: [PATHS.input],
        loader: 'file',
        query: {
          name: 'favicon.ico?[hash:8]'
        }
      }
    ]
  },
  plugins: [
    function () {
      this.plugin("done", function (stats) {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
          console.log(stats.compilation.errors);
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
    )

  ]
};

module.exports = config;
