const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  plugins: [new HTMLWebpackPlugin(
    {
      template: './src/index.html',
      filename: 'index.html'
    }
  )],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ]
  }

}