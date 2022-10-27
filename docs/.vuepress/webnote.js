const dirTree = require('directory-tree');
const path = require('path');

const tree = dirTree(path.resolve(__dirname, '../webnote'), {
  extensions: /\.md$/,
  normalizePath: true,
});

function getWebnote(arr) {
  if (!Array.isArray(arr)) return [];
  let res = arr.map((child) => {
    // console.log('child', child);
    if (child.children && child.children.length > 0) {
      return {
        // text: child.name,
        // children: getChild(child.children),
        // sidebarDepth: 2,
        title: child.name,
        collapsable: true, // 默认值是 true,可折叠
        children: getWebnote(child.children),
      };
    } else {
      return '/webnote' + child.path.split('docs/webnote')[1].replace('.md', '');
    }
  });
  // console.log('res', res);
  return res;
}

// 输出格式参考
let arr = [
  {
    title: 'webnote',
    collapsable: true, // 默认值是 true,可折叠
    children: ['/webnote/后端/数据库'],
  },
];

module.exports = getWebnote(tree.children);
