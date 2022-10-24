# webpack

## webpack.config.js

https://www.bilibili.com/video/BV1e7411j7T5

```js
process.env.NODE_ENV = "devolopment"
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
  // 单入口打包 index同级有多少js就打包多少个
  entry:'./src/index.js', 
  // 多入口打包1，还是打包成一个，少用
  entry:['./src/index.js','./src/add.js'], 
  // 多入口打包2
  entry:{
    index:'./src/index.js',
    add:'./src/add.js'
  }
  output:{
    filename:'[name].js',
    path:resolve(__dirname,'build')
  }
  // loader options
  module:{
    rules:[{
    test:/\.js$/,
    // 使用那些loader进行处理 执行顺序从下到上，右到左
    use:[  'style-loader','css-loader'] },
     // 将css 打包成js
    { test:/\.less$/, use:[ 'style-loader','css-loader','less-loader' ]},
    {test:/\.(jpg|png|gif)$/,loader:'url-loader',
      options:{
        limit:8*1024,esModule:false,
        name:'[hash:10].[ext]',
        outputPath:'imgs',//输入到build/imgs文件夹
      }}
    {test:/\.html$/,loader:'html-loader'}
		// 处理其他格式资源
    {exclude:/\.(js|css|html)$/,loader:'file-loader'}
    }]
  },
  plugins:[
    //  创建一个空的html（可通过template设置），并自动引入打包好的文件
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode:'development',
    // 自动在内存打包，不在本地 npx webpack-dev-server（cli3.x）npx webpack serve(cli5)
    devSever：{ 
      contentBase:resolve(__dirname,'build')
      compress:true, // gzip
      port：3000,
      open:true ,
      clientLogLevel:'none',// 不显示日志
      quiet:true, // 显示重要信息，其他不显示
      overlay:false,//出错不全屏提示
      proxy:{
	 			'/api':{
          target:'http://localhost:3000',
          pathRewrite:{
						"^/api":""
          }
        }
      }
    }
}
```

#### css打包成css，放到css文件夹，压缩css

MiniCssExtractPlugin打包css

optimize-css-assets-webpack-plugin压缩css

```js
module.exports = {
	module:{
    rules:[
    {
      test:/\.css$/,
      MiniCssExtractPlugin.loader,
      'css-loader',
      // css兼容处理
      {
        loader:'postcss-loader',
        options:{
          ident:'postcss',
          plugins:()=>{
            require('postcss-preset-env')()
          }
    	}}
     }
    ]	 
	},
	plugins:[
		new MiniCssExtractPlugin({
    	filename:'css/build.css'
    })
    // 压缩css
    new OPtimizeCssAssetsWebpackPlugin()
	]
}
// package.json
"browserslist":{
	"development":[
		"last 1 chrome version",
		"last 1 firefox version",
		"last 1 safari version"
	],
	"production":[
    ">0.2%",
    "not dead",
    "not op_mini all"
	]
}
```

#### eslint语法检查

三个开发包：eslint   eslint-plugin-import    eslint-config-airbnb-base

js代买加上注释：// eslint-disable-next-line     后面的代码不检查

```js
module.exports = {
	module:{
		rules：[{
			test:/\.js$/,
			exclude:/node_modules/,
    	enforce：'pre',//优先执行，先eslint再其他
			loader:'eslint-loader',
			options:{
				fix:true // 自动修复
			}
		}]
	},
	plugins：[]
}
// package.json配置-extent继承
"eslintConfig":{
	"extent":"airbnb-base"
}
```

#### js兼容处理

处理箭头函数兼容性，promise不行

babel-loader    @babel/preset-env    @babel/core

全部兼容

@babel/polyfill    --- 在js  import'@babel/polyfill '   体积大

按需兼容

```js
module.exports = {
  module:{
  ...
    rules:[
    {	
      test:/\.js$/,
      exclude:/node_modules/,
      loader:'babel-loader',
      options:{
        presets:[
          [
            '@babel/preset-env',
            {
              useBuiltIns:'usage',// 按需加载
              corejs:{ verson:3 },
              targets:{chrome:'60',firefox:'60',ie:'9',safari:'10',edge:'17'}
            }
          ]
        ]
      }
    ]
  },
  plugins:[]
}
```

#### js压缩

```
mode:'production'就会自动压缩
```

#### html压缩

```
module.exports = {
	module:{},
	plugins:[
		new HtmlWebpackPlugin({
			templatr:'./src/index.html',
			minify:{
				collapseWhitespace:true,//移除空格
				removeComment:true//移除console
			}
		})
	]
}
```



## configureWebpack

[vue官方文档](https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)

```
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}

// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
```



## chainWebpack

假如我们需要指定 webpack 配置的 enrty，我们只需要这样做：

```csharp
config
  .entry('app')
    .add('src/index.js')
// 它等价于 webpack 配置对象的这部分：
entry: {
  app: './src/index.js
}

// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}
```

## 开发环境优化

```
module,exports ={
	...
  devSever：{ 
    contentBase:resolve(__dirname,'build')
    compress:true, // gzip
    port：3000,
    open:true ,
    hot:true
  }
}
```

## source-map

```
module.exports = {
	...
	// inline-source-map  内联
	// hidden-source-map  外部
	// eval-source-map   内联
	devtool:'inline-source-map'
}
```

## oneOf

一个文件不会被多个loader过一遍

```
module.exports ={
	module:{
		rules:[
			{test:xxxxx},
			{oneOf:[{test:xxx},{tst:xxx}]}
		]
	}
}
```

## babel缓存

开启：cacheDirectory: true   即可

hash  webpack构建时生成的hash

chunkhash   同一个打包文件chunkhash一样

contenthash 根据内容创建hash，唯一

```
module.exports = {
	...
	module: {
		rules: [
			...
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include:resolve(__dirname,'src')
        loader: 'babel-loader',
        enforce:"pre",// "post"
        options: {
        presets: [
        	...
      	],
        //开启babel缓存，第二次构建时，会读取之前的缓存
        cacheDirectory: true
        }
      }
		]
	}
}

// 方法二：.bablerc
{
    // "presets": [["@babel/preset-react", {"modules": false }]],
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["babel-plugin-transform-runtime"]
}
```

## tree shaking

去除无用代码

1必须使用es6 模块化引入 （import）

2production环境

package.json

```
"sideEffect":false   // 可能会干掉css/@babel/polyfill
"sideEffect":["*.css"]
```

## code split代码分割

```js
module.exports ={
	// 多入口
	entry:{
		main:'./src/index.js',
		test:'./src/test.js'
	}
	output:{
		flename:'js/[name].[contenthash:10].js',
		path:resolve(__dirname,'build')
	},
  // 单入口：将node_modules的代码单独打包到chunk输出
  // 多入口js共用到的包，单独打包成一个chunk输出
  optimization:{
     splitChunk:{
       chunks:'all'
     },
      splitChunks:{
        cacheggroups:{
          common:{
            chunk:'initial',
            minSize:0,//多大开始抽离
            minChunks:2//调用几次开始抽离
          },
          vendor:{
						priority:1, // 权重
            test:/node_modules/,
            chunks:'initial',
            minSize:0,
            minChunks:2
          }
        }
      }
   }
}
// js引入的js不想合并打包，使用动态加载方式
// js里面动态加载,webpackChunkName: 'test' 打包后的名字，不写显示id
import(/* webpackChunkName: 'test' */ './test')
  .then()
	.catch()
```

## js懒加载 || 预加载

index.js

预加载，其他加载完了再偷偷加载

懒加载，触发了事件再加载

预加载好于懒加载，但兼容差

```
document.getElementById('btn').onclick(function(){
	import(/* webpackChunkName: 'test',webpackPrefetch:true*/ './test').then().catch()
})
```

## PWA-没网也能显示 

渐进式页面和离线应用、消息推送等功能

```js
// webpack.config.js
const WorkWebpackPlugin = require('workbox-webpack-plugin')
module.exports={
	module:{},
	plugins:[
		new WorkWebpackPlugin.GenerateSW({
			clientsClaim:true,
			skipWaiting:true
		})
	]
}
// index.js,代码得在server端运行
// 注册serviceworker
if('serviceWorker' in navigator){
	window.addEventListener('load',()=>{
		navigator.serviceWorker
			.register('/service-worker.js')
			.then()
			.catch()
	})
}
package.json
"eslintConfig":{
  "env":{
    "browser":true // 支持浏览器全局变量navigator,window这些
  }
}
```

## 多进程打包loader

项目多使用，消耗时间长的时候使用，这里帮babel多进程打包

```js
npm i -D thread-loader
babel使用
module.exports = {
module:{
	rules:[{
		test:/\.js$/,
		exclude:/node_modules/,
		use:[
			'thread-loader',// 开启多进程打包，启动消耗600ms，大于600ms使用就不亏
			{
        //写法1
				loader:'babel-loader',
        // 写法2
        {
        	loader:'babel-loader',
        	options:{
        		workers:2
      		}
        }
				options:{
					preset:[
						[
							'@babel/preset-env',
							{
								useBuiltIns:'usage',
								corejs:{verson:3},
								targets:{
									chrome:'60',
									firefox:'50'
								}
							}
						]
					]	
				}
			}
		]
	}]
} 
```

### happypack

```js
module.exports={
	module:{
		rules:[
			{
        test:/.\js$/,
        exclude:/node_modules/,
        include:path.resolve('src'),
        use:'Happypack/loader?id=js'
			},
			{
				test:/.\.css$/,
				// use:['style-loader','css-loader'],
				use:'Happypack/loader?id=css'
			}
		]
	},
	plugins:[
		new Happypack({
			id:'js',
      use:[{
        loader:'babel-loader',
        options:{
          presets:[
            '@babel/preset-env',
            '@babel/preset-react'
          ]
			}}]
		})
    new Happypack({
			id:'css',
    	use:['style-loader','css-loader'],
		})
	]
}
```



## externals

忽略打包

```
module.exports ={
	...
	externals:{
		// 官方名：起的名
		jquery:"jQuery"
	}
}
```

## dll

动态链接库

```js
// webpack.dll.js
module.exports={
	entry:{
		//[name]:官方名
		jqueryVentor:['jquery']
	},
	output:{
		filename:'[name].js',
		path:resolve(__dirname,'dll'),
		library:'[name].[hash]' // 打包的库向外暴露叫什么名字
	},
	plugins:[
		new webpack.DllPlugin({
			name:'[name].[hash]',
			path:resolve(__dirname,'dll/manifest.json') // 输出文件
		})
	]
}
package.json script
"dll":'webpack --config ./webpack.dll.js'

webpack.config.js
module.exports={
	plugins:[
    // 读取dll打包，webpack不用再给dll打包的包打包
		new webpack.DllReferencePlugin({
			manifest:resolve(__dirname,'dll/manifest.json')
		})
    // html里引入js
    new AddAssetHtmlWebpackplugin({
    	filename:resolve(__dirname,'dll/jqueryVentor.js')
    })
	]
}
```

new 插件写法


```js
const path = require('path')
const webpack = require('webpack')

const dllPath = 'dll/' // dll文件存放的目录

const libs = {
    'ui': ['ant-design-vue'],
    'frame': ['vue', 'vuex', 'vue-router', 'moment', 'quill'],
    'chart': ['@antv/g2', '@antv/data-set']
}

module.exports = {
  entry: {
    // 需要提取的库文件
    ...libs
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]'
  },
  plugins: [
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
} 
// vue.config.js
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CompresssionPlugin = require('compression-webpack-plugin')
config.plugins = [
    ...config.plugins,
    new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./dll/ui-manifest.json')
    }),
    new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./dll/frame-manifest.json')
    }),
    new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./dll/chart-manifest.json')
    })
  	new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, './dll/*.js'), // dll文件位置
        publicPath: './js', // dll 引用路径
        outputPath: './js' // dll最终输出的目录
    })
    new CompressionPlugin({
        test: /\.js$|\.html$|\.css$/,
        deleteOriginalAssets: false // 是否删除原文件
    })
] 
```



## 一些插件

```
module.exports={
module:{
	
},
plugins:[
	new webpack.NamedModulesPlugin() // 打印更新的模块路径
	new webpack.HotModuleReplacementPlugin()//热更新查件
]
}
```

## webpack -h 提示安装webpack-cli

webpack与webpack-cli

https://segmentfault.com/a/1190000013699050