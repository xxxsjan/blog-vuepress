/*
 * 读取env环境变量
 */
const fs = require('fs');
const path = require('path');

// env文件
const envfile = process.env.VUE_APP_CURRENTMODE === 'prod' ? '../.env.prod' : '../.env.dev';
const envPath = path.resolve(__dirname, envfile);
// 解析.env.prod或者.env.dev文件
const envObj = parse(fs.readFileSync(envPath, 'utf8'));
console.log(envPath, envObj);
const SERVER_ID = parseInt(envObj['VUE_APP_SERVER_ID']);

// 解析的方法
function parse(content) {
    // 声明结果容器
    const res = {};
    content.split('\n').forEach(line => {
        // matching "KEY' and 'VAL' in 'KEY=VAL'
        // eslint-disable-next-line no-useless-escape
        const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
        // matched?
        if (keyValueArr != null) {
            const key = keyValueArr[1];
            let value = keyValueArr[2] || '';

            // expand newlines in quoted values
            const len = value ? value.length : 0;
            if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
                value = value.replace(/\\n/gm, '\n');
            }

            // remove any surrounding quotes and extra spaces
            value = value.replace(/(^['"]|['"]$)/g, '').trim();

            res[key] = value;
        }
    });
    return res;
}

/*
 *定义多个服务器账号 及 根据 SERVER_ID 导出当前环境服务器账号
 */
const host = '49.235.79.10';
const port = '3666';
const username = 'root'; // 用户名
const password = ''; // 密码

const SERVER_LIST = [
    {
        id: 0,
        name: 'prod环境',
        host: host, // 外网IP地址
        // "port": port,
        username,
        password,
        uploadPath: '/www/admin/webnote.dolam.top_80/',
        localpath: path.resolve(__dirname, '../dist'), // 本地打包的位置
    },
    {
        id: 1,
        name: 'dev环境',
        host: host, // 外网IP地址
        // "port": port,
        username,
        password,
        uploadPath: '/www/admin/webnote.dolam.top_80/', //服务器项目目录
        localpath: path.resolve(__dirname, '../dist'), // 本地打包的位置
    },
];
module.exports = SERVER_LIST[SERVER_ID];
