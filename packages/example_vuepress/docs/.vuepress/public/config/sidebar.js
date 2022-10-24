module.exports = {
  // HTML
  '/page/basicKnowledge/html/': [
    {
      title: 'html基础',
      children: [
        '/page/basicKnowledge/html/', // 以docs为根目录来查找文件 
        // 上面地址查找的是：docs>accumulate>JS>test.md 文件
        // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标
      ]
    }
  ],
  // JS
  '/page/basicKnowledge/js/': [
    {
      title: 'js基础',
      path: '/page/basicKnowledge/js/',
      collapsable: false, // 可选的, 默认值是 true
      children: [
        '/page/basicKnowledge/js/jsType',
        '/page/basicKnowledge/js/Ndefind',
        '/page/basicKnowledge/js/Number',
        '/page/basicKnowledge/js/String',
        '/page/basicKnowledge/js/Array'
      ]
    }
  ],
  '/page/node/npmYarn': [
    {
      title: 'Node Yarn',
      path: '/page/node/npmYarn/',
      collapsable: false, // 可选的, 默认值是 true
    }
  ]
}