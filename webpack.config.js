const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = [{
    name: 'bundle',

    entry: {
      script: './src/js/main.js',
      // bootstrap: './src/js/vendors/bootstrap.js',
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].bundle.js',
      clean: true,
      publicPath: '.',
    },

    devtool: 'inline-source-map',

    plugins: [
      new HtmlWebpackPlugin(
        {
          title: 'NPM Builder Starter Page',
          filename: 'index.html',
          template: './src/html/index.html',
        }),
      ],

      devServer: {
        open: true,
        static: {
          directory: path.join(__dirname, "dist"),
        },
        port: 9000,
      },

      module: {
        rules: [{
            test: /\.123js$/,
            exclude: /(node_modules)/,
            use: [{
              loader: 'babel-loader'
            }]
          },
          {
            test: /\.css$/,
            exclude: /(node_modules)/,
            use: ["style-loader", "css-loader", "postcss-loader"]
          },
          {
            test: /\.(jpe?g|gif|png|svg|ttf|wav|mp3)$/,
            exclude: /(node_modules)/,
            loader: "file"
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            exclude: /(node_modules)/,
//            type: 'asset/resource',
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]


          },
        ]
      },
  },
]
