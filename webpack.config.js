const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true
  },
  plugins: [
    new CopyPlugin([{from: 'styles/**/*.css', to: 'css', flatten: true}]),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    }),
    new HtmlWebpackTagsPlugin({tags: ['custom.css'], append: true, publicPath: '/css'}),
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin(),
  ],
};
