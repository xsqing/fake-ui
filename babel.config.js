module.exports = {
  presets: [
    // 根据你在配置中指定的目标环境（比如浏览器版本、Node.js 版本等），
    // 自动确定需要的转换规则，例如将 ES6+ 的代码转换为向下兼容的 ES5 代码，以确保你的代码在目标环境中能够正确运行。
    ["@babel/preset-env", { targets: { node: "current" } }],

    // babel官方提供的解析ts的预设
    ["@babel/preset-typescript"],
  ],
  plugins: [
    "@vue/babel-plugin-jsx", // 解析基于vue的jsx
    "@babel/plugin-syntax-dynamic-import", // 懒加载语法解析，如果使用了 import() 语法
    [
      "@babel/plugin-proposal-decorators", // 装饰器语法解析
      {
        version: "2023-05",
      },
    ],
    [
      "@babel/plugin-transform-runtime", // 一个插件，可以重用 Babel 的注入帮助代码以节省代码大小。
      {
        corejs: false,
        helpers: true,
        regenerator: true,
      },
    ],
  ],
};
