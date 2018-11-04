const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ontime-components',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
      }
    ]
  },

  resolve: {      
    alias: {          
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
      'font-awesome': path.resolve(__dirname, './node_modules/font-awesome')
    }  
  },  
  
  externals: {      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },      
    "react-dom": {          
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    },
    "font-awesome": {
      commonjs: "font-awesome",
      commonjs2: "font-awesome",
      amd: "FontAwesome",
      root: "FontAwesome"
    }
  } 
};

module.exports = config;
