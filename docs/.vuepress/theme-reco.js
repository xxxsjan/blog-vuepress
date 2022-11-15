const recoCfg = {
  // https://vuepress-theme-reco.recoluan.com/views/1.x/
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    mode: 'auto', // 默认 auto,auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    // 评论功能1
    // valineConfig: {
    // appId: '...', // your appId https://valine.js.org/configuration.html
    // appKey: '...', // your appKey
    // showComment: true, // 某个页面不想开 isShowComments: false
    // },

    // 评论功能2
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'OWNER_OF_REPO',
    //   repo: 'NAME_OF_REPO',
    //   clientId: 'YOUR_CLIENT_ID',
    //   clientSecret: 'YOUR_CLIENT_SECRET',
    //   showComment: true, // 某个页面不想开 isShowComments: false
    // },

    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag', // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' },
      ],
    },
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      // { text: '笔记', link: '/webnote/' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'test',
        items: [
          { text: '文章', link: '/test/文章/', icon: 'reco-document' },
          { text: '需要密码', link: '/test/需要密码/', icon: 'reco-lock' },
        ],
      },
      { text: '百度', link: 'https://www.baidu.com' },
    ],
    // 密钥
    // keyPage: {
    // https://vuepress-theme-reco.recoluan.com/views/1.x/password.html
    // e10adc3949ba59abbe56e057f20f883e === 123456
    // keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
    // color: '#42b983', // 登录页动画球的颜色
    // lineColor: '#42b983', // 登录页动画线的颜色
    // },

    // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化
    head: [['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]],

    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',

    // 项目开始时间，只填写年份
    // startYear: '2017',

    author: 'xxxsjan',
    authorAvatar: '/avatar.png', //设置首页右侧信息栏头像
    // 友情链接
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com',
      },
      // ...
    ],
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: ['/guide/'],
      },
      require('./webnote')
    ],
  },
};
module.exports = recoCfg;
