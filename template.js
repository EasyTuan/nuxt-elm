/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run create test');
  process.exit(0);
}

// 页面模版
const indexTep = `<template>
  <div class="${dirName}-page">
    <mt-header fixed title="${dirName}"></mt-header>
    ${dirName}
  </div>
</template>

<script>
  export default {
    head: {
      title: '${dirName}'
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/mixin';

  .${dirName}-page {
    padding: px2rem(88px) 0 0 0;
  }
</style>
`;


process.chdir(`./pages`); // cd $1

fs.writeFileSync(`${dirName}.vue`, indexTep);

console.log(`模版${dirName}已创建`);

process.exit(0);
