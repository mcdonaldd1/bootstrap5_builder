var path = require('path');
const webpack = require('webpack');

module.exports = [{
    name: 'bundle',
    entry: './src/js/main.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'bundle.js',
      publicPath: 'dist/js'
    }
  },
  {
    name: 'pack',
    entry: './src/js/main.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, './dist/js'),
      filename: 'bundle.min.js',
      publicPath: './dist/js'
    }
  },
  {
    name: 'blable',
    entry: './src/js/main.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, './dist/js'),
      filename: 'es5.bundle.min.js',
      publicPath: './dist/js'
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [{
            loader: 'babel-loader'
          }]
        },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
          loader: "file"
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        }
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
  },
]
