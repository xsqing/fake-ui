const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const distfilename = 'fakeui';
const resolveDir = dir => path.join(__dirname, `../${dir}`);
const dev = merge(baseConfig, {
  mode: 'development',
  entry: './preview/index.tsx',
  output: {
    path: resolveDir('preview/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'preview'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
              include: [path.join(__dirname, 'preview/statics/icons')],
            },
          },
          'svgo-loader',
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './preview/index.html', //html模板
    }),
  ],
});

module.exports = [dev];
