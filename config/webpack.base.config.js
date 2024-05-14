const path = require('node:path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
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
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader, // 移出了style-loader
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/index.css', // 将组件使用的 CSS 输出到 css/components 文件夹中
    }),
  ],
  output: {
    filename: '[name].js',
  },
};
