var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var helpers = require('./helpers');

module.exports = {

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
  },

  target: 'web',

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.ts', '.js', '.html', '.css']
  },

  module: {
    preLoaders: [
        {
            test: /\.ts$/,
            loader: 'tslint-loader'
        }
    ],

    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'babel-loader?presets[]=es2015',
          'awesome-typescript-loader', 
          'angular2-template-loader'
          ]
      },
      {
        test: /\.json$/, 
        loader: 'json-loader'
      },
      {

        // Only run `.js` files through Babel
        test: /\.js?$/,

        
        loader: [
          "babel-loader",
          "eslint-loader"
        ],

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],

        // Exclude node_modules
        exclude: './node_modules',

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [ ExtractTextPlugin.extract('style', 'css!sass'), 'raw-loader', 'sass-loader'] // sass-loader not scss-loader
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: {
          glob: './server/**/*',
          dot: true
        },
        to: ''
      }
    ]),
    new ExtractTextPlugin("app.[hash].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: './server/views/index.html'
    }),
  ]
};
