const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const distfilename = 'fakeui';
const resolveDir = dir => path.join(__dirname, `../${dir}`);
const externals = require('./utils/getExternals');
const es = merge(baseConfig, {
  mode: 'production',
  entry: {
    [distfilename]: ['./index.esm'],
  },
  experiments: {
    outputModule: true,
  },
  externals,
  output: {
    path: resolveDir('dist/es'),
    library: {
      type: 'module',
    },
  },
});
const cjs = merge(baseConfig, {
  mode: 'production',
  entry: {
    [distfilename]: ['./index.js'],
  },
  externals,
  output: {
    path: resolveDir('dist/lib'),
    library: {
      name: distfilename,
      type: 'umd',
    },
  },
});

module.exports = [es, cjs];
