# blog-vuepress

## 技术栈

vuepress

## 部署

### js部署

自动打包上传：npm run deploy

deploy文件夹是配置文件，
根目录.env.dev/prod是环境配置设置，
deploy里面会引用

### scp部署

npm run scp
需要输入密码，输入密码是不显示的，敲完回车即可

<https://vuepress-theme-reco.recoluan.com/>

### github action 自动部署

## 报错相关

安装报错 Cannot read properties of null (reading 'pickAlgorithm')
解决：npm cache clear --force
