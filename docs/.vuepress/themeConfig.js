const sidebar = require('./webnote');
console.log(JSON.stringify(sidebar));
const defaultCfg = {
  // 主题配置
  themeConfig: {
    nav: require('./nav'),
    lastUpdated: true, // 最后更新时间
    editLinkText: '编辑此页',
    selectText: '选择语言',
    sidebarDepth: 2,
    // sidebar配置方法1-默认配置 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: ['/guide/'],
      },
      ...sidebar,
    ],
  },
};
const recoCfg = {
  theme: 'reco',
  themeConfig: {
    // logo: "/img/logo.jpg", // 导航栏logo
    smoothScroll: true, // 页面滚动
    nav: require('./nav'), // 头部菜单
    sidebar: {
      // HTML
      '/page/basicKnowledge/html/': [
        {
          title: 'html基础',
          children: ['/page/basicKnowledge/html/'],
        },
      ],
    },

    sidebarDepth: 2, // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上
    lastUpdated: '更新时间', // string | boolean 取每个文件最后一次 git 提交的 UNIX 时间戳
    // 博客配置
    type: 'blog', // 首页主题样式
    // authorAvatar: "/img/avatar.gif", // 首页右侧头像
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    blogConfig: {
      category: {
        location: 1, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认文案 “分类”
      },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认文案 “标签”
      },
    },
  },
};

module.exports = defaultCfg;
