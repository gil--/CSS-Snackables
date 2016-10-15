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

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['shared', 'bundles', 'node_modules']
  },

  externals: {
    "jquery": "jQuery"
  }
};
