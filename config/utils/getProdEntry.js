/**
 * 分包打包的时候，获取多入口
 */

const path = require('path');
const fs = require('fs');

const componentsDir = path.resolve(__dirname, '../../components');
const getEntry = function (isESM = false, distFileName = 'fakeui') {
  const entry = {};

  // 获取components文件夹下的所有子文件夹名称
  const componentDirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

  // 生成components/index.ts的入口配置
  const indexEntry = './components/index.ts';
  entry[distFileName] = indexEntry;
  // 遍历每个组件文件夹，生成对应的入口配置
  componentDirs.forEach(componentDir => {
    entry[componentDir] = `./components/${componentDir}/index.ts`;
  });
  return entry;
};

module.exports = getEntry;
