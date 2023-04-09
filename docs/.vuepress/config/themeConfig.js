const nav = require("./nav");
const webnote = require("./webnote");

const defaultCfg = {
  // 主题配置
  themeConfig: {
    nav,
    lastUpdated: true, // 最后更新时间
    editLinkText: "编辑此页",
    selectText: "选择语言",
    sidebarDepth: 2,
    // sidebar配置方法1-默认配置 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: ["/guide/"],
      },
      webnote,
    ],
  },
};
module.exports = defaultCfg;
