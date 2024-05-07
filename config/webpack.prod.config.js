const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const distfilename = 'fakeui';
const resolveDir = dir => path.join(__dirname, `../${dir}`);
const es = merge(baseConfig, {
  mode: 'production',
  entry: {
    [distfilename]: ['./index.esm'],
  },
  experiments: {
    outputModule: true,
  },
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
  output: {
    path: resolveDir('dist/lib'),
    library: {
      name: distfilename,
      type: 'umd',
    },
  },
});

module.exports = [es, cjs];
