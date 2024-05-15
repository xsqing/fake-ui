const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const distfilename = 'fakeui';
const resolveDir = dir => path.join(__dirname, `../${dir}`);
const externals = require('./utils/getExternals');
const getEntry = require('./utils/getProdEntry');
// 也可以抽离出去
const fileNameFormatter = function (chunkData) {
  return chunkData.chunk.name === distfilename ? 'index.js' : '[name]/index.js';
};
const es = merge(baseConfig, {
  mode: 'production',
  entry: getEntry(true),
  experiments: {
    outputModule: true,
  },
  externals,
  output: {
    path: resolveDir('dist/es'),
    filename: fileNameFormatter,
    library: {
      type: 'module',
    },
  },
});
const cjs = merge(baseConfig, {
  mode: 'production',
  entry: getEntry(false),
  externals,
  output: {
    path: resolveDir('dist/lib'),
    filename: fileNameFormatter,
    library: {
      name: distfilename,
      type: 'umd',
    },
  },
});

module.exports = [es, cjs];
