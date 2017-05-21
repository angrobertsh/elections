var path = require("path");
var webpack = require("webpack");


module.exports = {
  context: __dirname,
  entry: "./frontend/presidents.jsx",
  output: {
    path: path.join(__dirname, 'frontend'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
