const dirTree = require('directory-tree');
const path = require('path');

const tree = dirTree(path.resolve(__dirname, '../webnote'), {
  extensions: /\.md$/,
  normalizePath: true,
});
// 输出格式参考
// 你可以省略 .md 拓展名，同时以 / 结尾的路径将会被视为 README.md
let aaa = {
  title: 'webnote',
  collapsable: false, // 默认值是 true,可折叠
  children: [
    '/webnote/web',
    {
      title: 'dir',
      collapsable: false,
      children: ['/webnote/dir/test'],
    },
  ],
};
function genSidebar(data, name, path = '/') {
  path = path + name + '/';
  const files = data.children.filter((item) => !item.children && item.name !== 'README.md');
  const dirs = data.children.filter((item) => item.children);
  const childrenMd = files.map((item) => {
    return `${path}${item.name.split('.')[0]}`;
  });
  const dirsMd = dirs.map((dir) => {
    return {
      title: dir.name,
      collapsable: false,
      children: genSidebar(dir, dir.name, path),
    };
  });
  return [...childrenMd, ...dirsMd];
}
const result = {
  title: 'webnote',
  collapsable: false,
  children: genSidebar(tree, 'webnote'),
};
// console.log(result);
module.exports = result;
