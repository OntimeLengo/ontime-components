const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {

  devServer: {
    host: '0.0.0.0',
    port: 8888,
    contentBase: path.resolve(__dirname, 'build'),
    watchContentBase: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  
  entry: path.resolve(__dirname, 'main', 'frontend', 'src', 'index.js'),

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: path.join('js', 'bundle.js')
  },

  plugins: [
    new htmlPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin([
      {from: 'public/fonts', to: 'fonts'}
    ])
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: path.join(__dirname, 'main', 'frontend', 'src'),
      }
    ]
  }
};

module.exports = config;
