const scpClient = require('scp2');
const chalk = require('chalk');

const server = require('./products');

const Client = require('ssh2').Client;
const ora = require('ora');
var compressing = require('compressing');
const environment = process.env.VUE_APP_CURRENTMODE === 'prod' ? '生产' : '测试';
const spinner = ora('正在发布到' + environment + '服务器...');
const ziping = ora('正在压缩' + server.localpath);

var conn = new Client();

ziping.start();
compressing.zip
    .compressDir(server.localpath, 'dist.zip')
    .then(e => {
        ziping.stop();
        console.log('压缩成功');
        // 上传压缩包
        spinner.start();
        scpClient.scp(
            'dist.zip',
            {
                host: server.host,
                username: server.username,
                password: server.password,
                path: server.uploadPath,
            },
            err => {
                spinner.stop();
                if (err) {
                    console.log(chalk.red('发布失败.\n'));
                    throw err;
                } else {
                    console.log('上传dist.zip到%s成功', server.uploadPath);
                    // linux操作
                    conn.on('ready', () => {
                        // 解压
                        let ctr =
                            'cd ' +
                            server.uploadPath +
                            '\n' +
                            'rm -rf wwwroot' +
                            '\n' +
                            'sudo unzip -o dist.zip  -d ./wwwroot' +
                            '\n' +
                            'cd ./wwwroot' +
                            '\n' +
                            'mv ./dist/* ./' +
                            '\n' +
                            'rm -rf dist';
                        let order = `cd ${server.uploadPath}\nrm -rf wwwroot\nsudo unzip -o dist.zip  -d ./wwwroot\ncd ./wwwroot\nmv ./dist/* ./\nrm -rf dist`;
                        conn.exec(order, (err, stream) => {
                            if (err) throw err;
                            stream.on('close', function(code, signal) {
                                console.log(chalk.green('上传完成'));
                                conn.end();
                            });
                        });
                    }).connect({
                        host: server.host,
                        username: server.username,
                        password: server.password,
                    });
                }
            }
        );
    })
    .catch(err => {
        console.log(chalk.red('Fail! 压缩失败'));
    });
