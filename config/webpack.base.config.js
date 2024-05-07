const path = require('node:path');

module.exports = {
  // 指定哪些模块是外部模块，不需要被打包进输出的bundle中
  externals: [
    {
      vue: {
        root: 'Vue', //表示在浏览器环境中，全局变量Vue可以直接访问
        commonjs2: 'vue', // 表示在CommonJS环境的模块引入方式，通过require(‘vue’)来引入Vue模块。
        commonjs: 'vue', // 同样表示在CommonJS环境的模块引入方式，通过require(‘vue’)来引入Vue模块。
        amd: 'vue', // 表示在AMD（Asynchronous Module Definition）环境下的模块引入方式。
        module: 'vue', // 表示ES Module（ES6模块）的引入方式。
      },
    },
  ],
  // 指定webpack在解析模块时的行为,在这个配置中，modules数组指定了webpack在解析模块时应该搜索的目录顺序
  // extensions数组指定了webpack在尝试解析导入模块时应该尝试的文件后缀顺序，例如.ts、.tsx、.js、.jsx。这些配置有助于webpack更方便地找到对应的模块文件
  resolve: {
    modules: ['node_modules', path.join(__dirname, './node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // 如何处理不同类型的模块
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/, // 排除此目录，三方包已经是编译好的了，不需要再进行编译
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name].js',
  },
};
