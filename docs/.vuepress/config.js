const head =require('./config/head')
// const themeConfig = require('./config/themeConfig');
const themeReco = require('./config/theme-reco.js');

const config = {
  // base: '/', // 本地看 vite or liveServer  // 根标签有data-server-rendered="true"，要移除了才可以正常渲染
  // base: '/web-note/', // 部署github
  base: process.env.VUE_APP_CURRENTMODE === 'deploy' ? '/blog-vuepress/' : '/',
  title: '个人博客',
  description: 'Hello!',
  head,
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
