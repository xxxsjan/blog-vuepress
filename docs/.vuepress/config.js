const themeConfig = require('./themeConfig');
const themeReco = require('./theme-reco.js');
const config = {
  // base: '/', // 本地看 vite or liveServer  // 根标签有data-server-rendered="true"，要移除了才可以正常渲染
  // base: '/web-note/', // 部署git
  base: process.env.VUE_APP_CURRENTMODE === 'deploy' ? '/web-note/' : '/',
  title: '个人博客',
  description: 'Hello!',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }], // 编译为 <link rel="icon" href="/favicon.ico">
    ['script', { src: '/custom.js' }],
  ],
  dest: './dist',
  evergreen: true,
  ...themeReco,
  plugins: [],
  globalUIComponents: ['Component-1'],
};

// sidebar配置方法2-使用vuepress-plugin-autobar自动获取 https://juejin.cn/post/6844903935027707918
const useAutoBarPlugin = false;
if (useAutoBarPlugin) {
  config.plugins.push('autobar');
}

module.exports = config;
