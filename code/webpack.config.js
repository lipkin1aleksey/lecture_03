const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { 
                loader: 'css-loader', 
                options: { minimize: true } 
              }, 
              'sass-loader']
        })
      }
    ]
  },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
          })
    ]
};