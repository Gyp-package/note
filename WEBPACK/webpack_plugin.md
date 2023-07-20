1. 登录

🎈下载axios包 

```js
npm i axios
```

导入axios包

```js
import axios from 'axios'
export default axios//默认导出用来让别的页面发请求 
```

修改utils包导出实现函数

```js
// 命名导出
export function myAlert(isSuccess, msg) {
}
```

在index.js中进行导入

```js
import myAxios from '../utils/request.js' //默认导入
import { myAlert } from '../utils /alert.js '//命名导入
```

2. 搭建开发环境 webpack-dev-server,自动检测代码变换热更新

开发环境：仅在自己电脑上  development，调试代码，实时更新

生产环境：已经上线,别的用户可以访问  production，压缩代码轻量

3. 🎈注入环境变量 DefinePlugin

允许在编译时将变量转为其他值或表达式

webpack.config.js中配置插件

```js
const webpack =require ("webpack")
module.exports = {
p1ugins: [
new webpack.DefinePlugin({
// key是注入到打包后的前端JS 代码中作为全局变量
// value是变量对应的值（在corss-env 注入在 node.js中的环境变量字符串
    'process.env.NODE_ENV':JSON.stringify(process.env.NODE_E	NV})
	]
}
```

在index.js中可以检查运行环境【过滤打印语句】

```js
if(process.env.NODE_ENV === 'production'){
	console.log = function(){} 
}
log('开发模式用，生产模式失效')
```



🎈 开发环境调错 -source map 

压缩混淆后的代码可以准确追踪错误警告

webpack.config.js中配置

```js
const config = module.exports{...}
if(process.env.NODE_ENV === 'development'){
	config.devtools='inline-source-map'
}
```

仅用在开发模式，生产模式禁用



🎈 解析别名 alias，简化路径引入 @表示src绝对路径

```js
module.exports = {
resolve: {
    alias: {
	'@': path.resolve( dirname，'src') //以后@就替换src文件名
    	}
   }
}
```



🎈 webpack优化 -CDN使用，内容分发网络

webpack打包防止import的包被打包

如果html文件中引入了bootstrap中引入了css,axios以及js文件

使用以下语法

```html
<head>
<%if(htmlwebpackPlugin.optiorls.useCdn){%>
    
〈link href= "https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.min.css"rel="stylesheet">
</%}%>
    
</head>
    
<body>    
<%if(htmlwebpackPlugin.options.useCdn){ %>
<script src="https://cdn.bootcdn.net/ajax/libs/axios/1.3.6/axios.min.js"></script>
<script src= "https://cdn. bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.min.js "><script>I
<%} %></ body>
    
```

webpack.config.js中配置

```js
if(process.env.NODE_ENV === 'production'){
	config.enternals={				'bootstrap/dist/css/bootstrap.min.css':'bootstrap',
		'axios':'axios'
	}
}
```

plugins中引入

```js
 new HTMLWebpackPlugin({
    	useCdn: process.env.NODE_ENV === 'production'
 	})
```

开发环境运行命令

```js
npm run dev
```

生产模式

```js
npm run build
```



🎈 多页面打包

```js
const config ={
    entry: {
	'模块名1': path.resolve( dirname，'src/入口1.js ')，
    '模块名2': path.resolve( dirname,'src/入口2.js '),
	},
	output: {
	path: path.resolve( dirname，'dist'),
    filename: './[name]/index.js'
	}
	plugins:[
	new HtmlwebpackPlugin({
	template: './pub1ic/页面2.htm1'，   //模板文件
    filename: './路径/index.htm1',  //输出文件
    chunks:['模块名2"']          //引入的html与css文件来源的key文件名
        })
	new HtmlwebpackPlugin(i
	template: './public/页面2.htm1'，   //模板文件
    filename: './路径/index.htm1 '，    //输出文件
    chunks:['模块名2"]
        })
	]
}
```

🎈  优化分割公共代码	splitChunks

webpack.config.js中配置

```js
optimization: {
 splitChunks: {
	chunks: 'a11",//门所有模块动态动态移入的都分割分析	
    cacheGroups: {//分隔组
	commons: {//抽取公共模块
	minSize: 0，//抽取的chunk最小大小字节
    minchunks: 2,//最小引用数
	reuseExistingChunk: true，//当前 chunk包含已从主 bundle 中拆分出的模块，则它将被重用
    name(module，chunks,cacheGroupKey){//分离出模块文件名
		const a11chunksNames = chunks.map((item) => 			item.name).join('~')	//模块名1~模域
        return `./js/${a11ChunksNames}`//输出到dist目录下位置
    	}
	   }
      }
    }
}
```



























































