const themeConfig = require('./themeConfig');
const config = {
  // 打包是文件的引用路径 也是开发环境时启动项目8080后面拼接的路径
  // 如果你要部署在 https://<USERNAME>.github.io/ 上，你可以省略 base 使其默认为 '/'。
  // 如果你要部署在 https://<USERNAME>.github.io/<REPO>/ 上，例如你的仓库地址为 https://github.com/<USERNAME>/<REPO>，那么请设置 base 为 '/<REPO>/'。
  // 适用gitee, 就gitee上的项目名，部自己服务器'/'就行
  base: '/', // 本地看
  // base: '/web-note/', // 部署gitee的web-note仓库名
  title: 'web-note',
  description: 'Hello!',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  dest: './dist',
  evergreen: true,
  ...themeConfig,
  // sidebar配置方法2-使用vuepress-plugin-autobar自动获取 https://juejin.cn/post/6844903935027707918
  plugins: [],
};
const useAutoBarPlugin = false;
if (useAutoBarPlugin) {
  config.plugins.push('autobar');
}
module.exports = config;
