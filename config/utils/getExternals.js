const externals = [
  {
    vue: {
      root: 'Vue', //表示在浏览器环境中，全局变量Vue可以直接访问
      commonjs2: 'vue', // 表示在CommonJS环境的模块引入方式，通过require(‘vue’)来引入Vue模块。
      commonjs: 'vue', // 同样表示在CommonJS环境的模块引入方式，通过require(‘vue’)来引入Vue模块。
      amd: 'vue', // 表示在AMD（Asynchronous Module Definition）环境下的模块引入方式。
      module: 'vue', // 表示ES Module（ES6模块）的引入方式。
    },
  },
];

module.exports = externals;
