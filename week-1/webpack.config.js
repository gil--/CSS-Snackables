var webpack = require('webpack');

module.exports = {

  entry: {
    global: './scripts/src/index.js',
  },

  output: {
    publicPath: '/scripts/dist/',
    filename: '[name].entry.js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.es6.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.es6.js'],
    modulesDirectories: ['shared', 'bundles', 'node_modules']
  },

  externals: {
    "jquery": "jQuery"
  }
};
