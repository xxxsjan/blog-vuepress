## node

# node基础&配置

## 1、配置

### 配置npm环境

#### 一路默认安装成功后

①在NodeJS的主目录下，创建"node_global"及"node_cache"两个文件夹 

![image-20200219142317018](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200219142317018.png)

②、启动cmd，输入

```javascript
npm config set prefix "C:\Program Files\nodejs\node_global"
npm config set cache "C:\Program Files\nodejs\node_cache"
#更改registry指向
npm config set registry http://registry.npm.taobao.org
npm config set registry https://registry.npm.taobao.org
#查看设置是否成功
npm config ls
#如果想还原npm仓库地址的话，只需要在把地址配置成npm镜像就可以了
npm config set registry https://registry.npmjs.org/
```

③、随便安装一个常用的全局模块express, 

在cmd命令行里面，输入`npm install express -g`

（“-g”意思是装到“C:\Program Files\nodejs\node_global”里面。）。

待cmd里面的安装过程滚动完成后，会提示“express”装在了哪、版本还有它的目录结构是怎样。

④、关闭cmd，打开系统对话框，“我的电脑”右键“属性”-“高级系统设置”-“高级”-“环境变量”。

⑤、进入环境变量--系统变量--新建"NODE_PATH"

​		-->输入”C:\Program Files\nodejs\node_global\node_modules“。

![image-20200219142827467](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200219142827467.png)

（ps：这一步相当关键。）
用户变量--PATH：C:\Users\admin\AppData\Roaming\npm

​				--修改为--C:\Program Files\nodejs\node_global

要不使用module的时候会导致输入命令出现

“xxx不是内部或外部命令，也不是可运行的程序或批处理文件”

这个错误。

⑥、以上步骤都OK的话，我们可以再次开启cmd命令行，进入node，输入“require('express')”来测试下node的模块全局路径是否配置正确了。正确的话cmd会列出express的相关信息。如下图（如出错一般都是NODE_PATH的配置不对，可以检查下第④⑤步）
————————————————
原文链接：https://blog.csdn.net/shenggaofei/article/details/80361627



### 安装淘宝镜像

(1)

```javascript
#管理员运行cmd
npm install -g cnpm --registry=https://registry.npm.taobao.org
#卸载
npm uninstall cnpm -g
```

​	因为cnpm会被安装到--C:\Program Files\nodejs\node_global\node_modules--里，

​	但cnpm.cmd文件在--C:\Program Files\nodejs\node_global，

​	所以系统变量path设置为--C:\Program Files\nodejs\node_global

​	在**系统变量**path下添加该路径即可正常使用cnpm。

(3)输入cnpm -v命令，查看结果!![image-20191216230206003](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20191216230206003.png)

### npm常见问题

#### 'xxx' 不是内部或外部命令

原因：丢包了	重新安装即可

```javascript
npm install	#安装package里面的全部依赖包
npm start 	#启动模块
```

### 常用命令

```javascript
npm init //npm init --yes #初始化，生成package.json文件
npm install moduleName # 安装模块
npm install moduleName@xxx # 指定版本安装
npm install -g moduleName  # -g 安装到全局，位置路径通过 npm config prefix 查询。
npm install -save xxx   # -save 安装到package文件的dependencies节点（运行依赖）。
npm install -save-dev xxx  # -save-dev 在package文件的devDependencies节点开发依赖。
npm info moduleName #查看包的信息
#查看所有全局安装的模块 
npm ls -g
#通过--depth参数指定输出深度
npm ls -g --depth=0
#查看npm默认设置（部分） 
npm config ls
#查看npm默认设置（全部） 
npm config ls -l
## 卸载全局包
 npm uninstall -g nodemon
 npm uninstall -g vue-cli
npm install -g @vue/cli
yarn global remove vue-cli
yarn global add @vue/cli
#清缓存
npm cache clean --force
#安装rimraf删除node_module文件夹
npm install rimraf -g
rimraf node_modules
```



## 一些链接

#### NodeJS、NPM安装配置步骤(windows版本) 以及环境变量详解

https://blog.csdn.net/shenggaofei/article/details/80361627

#### [web前端node.js常用命令](https://www.cnblogs.com/caoxiangwang/p/11444146.html)

https://www.cnblogs.com/caoxiangwang/p/11444146.html

#### npm install 报错(npm ERR!errno -4048)

https://blog.csdn.net/wanlixingzhe/article/details/81020236

#### 使用npm踩过的坑

https://blog.csdn.net/taylorzun/article/details/81233404

#### npm安装依赖errno -4048报错

https://www.jianshu.com/p/3d209a682d7d

#### Node.js安装及环境配置之Windows篇

https://www.cnblogs.com/zhouyu2017/p/6485265.html

## 2、一些模块的使用

### 系统模块fs

读取文件

```
const fs = require('fs')
fs.readFile('相对路径','utf-8',(err,doc)=>{
//err 返回对象或者null
//doc 返回结果
})
```

写入文件内容

```
fs.writeFile('相对路径','写入文本或者数据',callBack)
不存在文件就创建
```

#### 路径Path

![image-20200215143815969](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200215143815969.png)



## 3、常见问题

### win10 在使用powershell时不能运行cnpm命令

解决淘宝镜像安装后使用不了问题
安装淘宝镜像后运行cnpm报错如下

解决方法
以管理员身份运行powershell
执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的
然后执行set-ExecutionPolicy RemoteSigned

输入A Enter就解决了

## module.exports || exports||node-require

### module.exports

module变量代表当前模块。

这个变量是一个对象，module对象会创建一个叫exports的属性

这个属性的默认值是一个空的对象，所以只有一个

```
module.exports = {};
```

例子：app.js

```
module.exports.Name="我是电脑"；
module.exports.Say=function(){
  console.log("我可以干任何事情")；  
}
//上边这段代码就相当于一个对象
{
  "Name":" 我是电脑"，
  "Say"    :function(){
         　　console.log("我可以干任何事情")；  
     　　　}
}
```

require方法用于加载模块。

```
var req=require("./app.js");
req.Name      //这个值是 "我是电脑"
req.Say()      //这个是直接调用Say方法，打印出来 "我可以干任何事情"
```

### exports || module.exports

Node为每个模块提供一个exports变量，指向module.exports。

exports不可以=其他，不然就指向其他对象了，这样等于切断了与module.exports的联系：

```
var exports = module.exports;

//两个是相等的关系，但又不是绝对相当的关系
例如：
1.module.exports可以直接导出一个匿名函数或者一个值
module.exports=function(){
  var a="Hello World"  
  return   a;
}
但是exports是不可以的，因为这样等于切断了exports与module.exports的联系。
exports=function(){           //这样写法是错误的
  var a="Hello World"        //这样写法是错误的
  return   a;                //这样写法是错误的
}                            //这样写法是错误的
```

## export||export default ||ES6-import

export是es6引出的语法，用于导出模块中的变量，对象，函数，类。对应的导入关键字是import。

二者的区别有以下几点：

- export default在一个模块中只能有一个，当然也可以没有。export在一个模块中可以有多个。
- export default的对象、变量、函数、类，可以没有名字。export的必须有名字。
- export default对应的import和export有所区别

```js
1.export写法
//./aap.js
var name="我是电脑"；
var say=function(){
 console.log("我可以干很多事")；
}
export {name，say}；//也可以直接一个一个的export但是必须得有名字
export const a=1；
export function data(){　　return data;}
//其他页面引入时必须这样
import {name，say} from "./app.js"

2.export default
//app.js
//可以没有函数名字
export default function(){　　return data;}
//这里export不能这样导出
export default const a=12；
//应该这样导出
const a=12；
export default a
 
//其他页面引入时必须这样
import data from "./app.js"
```

总结：可以看到用export default，import语句不需要使用大括号；用export，对应的import语句需要使用大括号，一个模块只能有一个默认输出，所以export default只能使用一次。

export因为可以多个，所以imports时需要解构，也就是要{}

export default只能一个，所以import时随便命名from就行



# webpack4

"dev": "webpack-dev-server --inline --hot --env.dev",

## 基础命令

```javascript
npm init -y
cnpm i webpack -D
cnpm i webpack-cli -D
webpack执行
```

## webpack.config.js 

配置文件

```javascript
//webpack.config.js
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template:path.join(__dirname , './src/index.html'),//源文件
  filename : 'index.html' //生成首页名词
})
module.exports = {
  mode:"development||||production",//mode:4.x新增的
  //webpack 4.x 默认打包入口文件是src>index.js
  //webpack 4.x 默认输出: dist > main.js
  plugins：[htmlPlugin]
}
export default {}  //这个不可以暴露,这是ES6的API
```

## npm i webpack-dev-server -D  

npm run dev 自动编译 

他的main.js在内存上不在本地,不是src里面的main.js

json里面会多出 "dev":"webpack-dev-server --open(自动打开浏览器) --port 3000(改端口) --hot --progress(进度) --compress(压缩) --host 127.0.0.1(改localhost)"

# 创建web服务器 

## http--原生？

```js
const http = require('http')
const app = http.createServer((req,res)=>{
  //req里有url
  //res可以用来设置参数返回
  res.writeHead(200, { 'Content-type': 'text/html' } 
  res.write(data)
  res.end()
});
app.on('request',(req,res)=>{
	res.end() 
})
app.listen(3000,()=>{
  console.log('服务器启动成功，http://loacalhost:3000')
})
```



## express@4

--http升级版

| express  | npm i express@4 -s           |
| -------- | ---------------------------- |
| 日志模块 | npm install express morgan   |
| 数据库   | npm install mysql -s         |
| favicon  | npm install serve-favicon -s |

### app.js

```js
##app.js---------------------------------
const express = require('express') 
const logger = require("morgan") 
const app = express()
app.use(logger("dev"))

//设置跨域访问
app.all('*', (req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
res.header("Content-Type", "application/json;charset=utf-8");
next();
});

// 获取post请求的数据  req.body 即可获取
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//这个是直接归属根目录
app.use(require('./routes/router'))
//下面的是设置父级目录
app.use('/users', require('./routes/users'));
app.use('/order', require('./routes/order'));
// 配置static静态资源文件夹的父级
app.use(express.static(__dirname+"/src")) 
app.get('/', (req, res, next) => {
    res.send("ok")
})
app.listen(3000, () => {
  console.log('服务器启动成功，http://loacalhost:3000'
}) 
  
##router.js---------------------------------------
const express = require("express")
const router = express.Router
router.get('/', function (req, res) {
	//  res.send('hello, express')
 	res.redirect('/pages/index.html')
})
router.get('/:id', function (req, res) {
    res.send(`${req.params.id} 用户信息`);
});
router.post('/login',(req,res)=>{})
module.exports = router
```

### url模块

```
const querystring = require('querystring')
querystring.parse()

const path = require('path')
const url = require('url')
const fs = require('fs')
const mime = require('mime')
app.on('request',(req,res)=>{
	//拼接路径
	// url.parse(req.url,true).query 
	let pathname = url.parse(req.url).pathname
	let realPath = path.join(__dirname,'pubilc'+pathname
	let type = mime.getType(realPath) 
  //读取文件
  fs.readFile(realPath,(error,result)=>{
    if(error !== null){
      res.writeHead(404,{'content-type':'text/plain;charset=utf-8'})    
      res.end('读取文件失败') 
      return
    }
    // 成功返回状态码和类型
    res.writeHead(200,{ 'content-type':type})
    res.end(result)
  })
})
```





### promisify模块--读取文件

```
const fs = require('fs')
const promisify = promisify('util').promisify
const readFile = promisify(fs.readFile)
async function run(){
  let r1 = await readFile('./1.txt','utf-8')
  let r2 = await readFile('./2.txt','utf-8')
  let r3 = await readFile('./3.txt','utf-8')
}
run()
```



### 数据库模块

```js
##mysql.js
const mysqlModule = require("mysql")
module.exports = {dbConfigFun}
function dbConfigFn(sql,params,fn){
  // 创建连接
  let db = mysqlModule.createConnection({
		host:"localhost",
    port:"3306",
    user:"root",
    password:"root",
    database:"demoDB"  
	})
  db.connect()
  //执行语句
  db.query(sql,parmas,fn)
	db.end()
}

##app.js
const dbFn = require('..dbConfigFun')
let sql1 = "select * from tableName where usernam = ? and pwd = ?"
let sql2 = "insert into tableName values (null,?,?,?)"
let params = [username,password]
dbFn.dbConfigFn(sql1,params,(err,data)=>{
   // data是个数组，没查到数组长度为0
  if(data.length){console.log("登录成功")}
})
#用模板字符串把sql处理好在传入参数，这种方法会有漏洞，别人可以通过sql注入：密码随便设，后面加上'or 1='1'便可登录，不建议使用，所以上面传入数据的方式安全
let sql1 = `select * from tableName where usernam = '${usernam}' and pwd = '${password}'`
dbFn.dbConfigFn(sql1,[],(err,data)=>{
   // data是个数组，没查到数组长度为0
  if(data.length){console.log("登录成功")}
})
```

### 连接池

app.js==>router.js==>controller.js==>dao==>dbPool

控制器：我有数据

dao：我有模型，我就是拼各种模型的

连接池：我有做模型的方法

```js
##mysqlPool.js
const mysql = require('mysql')
const poolCig ={
  host:"localhost",
  port:"3306",
  user:"root",
  password:"root",
  database:"demoDB"  
}
cosnt dbPool ={
  pool:{},
  create(){ this.pool = mysql.createPool(poolCig) },
  connect(sql ,arr ,fn){
    this.pool.getConnection((err,connection)=>{
      connection.query(sql,arr,fn)
      connection.release()
    })
  }
}
dbPool.create()
module.exports = dbPool

##dao层 userDao.js
const dbPool = require('mysqlPool.js')
module.exports = {
  addUser(sql,arr,cb){
    dbPool.connect(sql,arr,(err,data)=>{
      //dbPool 中fn直接把原本的回调(err,data)=>{}替换了，所以dao层传参cb时外面要包裹一层,不包应该也没问题
      cb(err,data)
    })
  }
}

##userCtrl.js
const userDao = reqyire("userDao.js")
adduser(){
  userDao.addUser(insert into tableName values (null,?,?,?),[zhangsan,123,我是张三],(err,data)=>{
    if(data){res.send('success')}
    else{res.send('fail')}
	})
}

##indexRouter.js
const userCtrl = require("userCtrl")
router.post('/login',userCtrl.addUser())
```





### favicon

```
const favicon = require("serve-favicon")
app.use(favicon(__dirname+"/src/images/xxxx.jpg"))
```



### req||res

```js
#req
req.headers
req.url
req.method  --get /post
//提交的表单数据 xxx是input标签里的name属性
//post请求不能获取，因为他解析的url
req.query.xxx 
# res
res.send() 
res.json() 这个也是发送
res.writeHead(200)
res.end()
res.redirect("/page/index.html")
res.status(404) 
res.redirect("/pages/404.html")
#'content-type':
'text/plain;charset=utf-8' --纯文本
text/html
text/css
```





## Koa2

--express升级版

日志模块--两个都可以用

const morgan = require('koa-morgan')

const Koa_Logger = require("koa-logger")

```js
const Koa = require('koa')
const app = new Koa();
const Koa_Logger = require("koa-logger"); //需安装依赖
const logger = Koa_Logger()
app.use(logger)
app.listen(8888, () => {
    console.log('请求地址为：http://127.0.0.1:8888')
})
```



## gulp@3.9.1

```
安装 gulp 命令行工具
npm install --global gulp-cli
cnpm init 
cnpm i gulp@3.9.1 -D
```

##### 报错primordials is not defined

https://blog.csdn.net/zxxzxx23/article/details/103000393

安装gulp版本3.9.1与node版本12.4.0不兼容，需要**11.15.0版本**

##### 使用插件

cnpm i gulp-sass -D

```
gulp.task("sass",function(){
return gulp.src("stylesheet/index.scss")
.pipe(sass()).pipe(gulp.dest("dist/css"))
})
```

### 

## Express+EJS项目

 EJS是Express的模板，Express的模板有很多，目前较流行的应该是Jade，不过EJS相对比较简单，结构清晰和asp之类的开发比较相似，所以我这里选用了EJS。根据Express官网的[模板引擎](https://link.jianshu.com?t=http://www.expressjs.com.cn/advanced/developing-template-engines.html)介绍可以知道，模板是用来渲染html页面的，简单的说就是替换一些数据(标签)然后打包发给客户端浏览器，使用文件后缀来识别要使用哪个引擎处理(EJS后缀为.ejs)。xxx.ejs->EJS->html->浏览器。

```js
# 安装后我们就能使用express命令了
npm install express-generator -g
# 生成EJS项目
  // 会以项目名创建一个文件夹，项目文件放到文件夹里面
  express --view=ejs server
  express -v ejs 项目名  
  // 把项目文件放在当前文件夹(当前文件夹非空会有警告)
	express -v ejs
	注：ejs表示使用ejs模板，默认是jade
npm install 
# 启动项目
npm start
```

访问[http://www.localhost:3000/](https://link.jianshu.com/?t=http://www.localhost:3000/) 

注意要加3000端口，Express默认监听的是3000端口而不是80

# commonJS

Node 应用由模块组成，采用 CommonJS 模块规范。

每个模块有自己的变量和方法，需要一种方式去暴露和引用一个模块的变量和方法。

require方法用于加载模块，module.exports和exports用于暴露方法。

module.exports和exports的区别：

（1）module.exports 初始值为一个空对象 {}；

（2）exports 是指向的 module.exports 的引用；

（3）require() 返回的是 module.exports 而不是 exports

写法：exports = module.exports = somethings，即 module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports 即可。

CommonJS模块的特点：

(1）所有代码都运行在模块作用域，不会污染全局作用域。

(2）模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。

（3）模块加载的顺序，按照其在代码中出现的顺序。

AMD规范与CommonJS的区别：

CommonJS规范加载模块是同步的，AMD规范则是非同步加载模块，允许指定回调函数。

由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用。

但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。

CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

# exports暴露

### export const

```
export const a = {}
export const b = {}
export const c = {}

// 导入
import {结构} from './..'
或者
import * as name from './..'
```
### export default

```
export default {
	a:{},
	b(){}
}

// 导入
import namefrom './'
...名字 //展开运算引入
```

### module.exports =  function

```
module.exports =()=>{}

// 导入
const fn = require('@/..')  // fn()直接用
```



# 安装sass

### 报错：

Node Sass could not find a binding for your current environment: Windows 64
node sass 没找到你当前环境的绑定

重新构建Node-sass
输入命令： npm rebuild node-sass
然后在更新一下：npm update

期间需要连接github，可能由于网络原因造成错误

#### sass-loader版本过高运行错误TypeError: this.getOptions is not a function

```
// 卸载
npm uninstall sass-loader
// 安装
npm i -D node-sass@4
npm i -D sass-loader@7.1.0
```

## node更新版本

直接卸载，官网下载好对应安装包，直接安装

再走一边上面安装流程