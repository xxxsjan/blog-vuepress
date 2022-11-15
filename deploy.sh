#!/bin/sh
# echo "时间是：`date '+%Y-%m-%d %H:%M:%S'`"
# https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages
# 确保脚本抛出遇到的错误
set -e

rm -rf dist &&
npm run build && 
git add . &&
git commit -m dist-$(date +%Y%m%d%H%M%S) &&
git push