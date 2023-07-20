## 1.webpack基本使用

1. 需要打包工具原因：

对使用框架（vue,react），es6模块化语法，less/sass等css预处理器【都是】等**语法开发**时使用的代码在浏览器运行**编译成浏览器能识别**的 JS,CSS的语法才能运行，除此，打包工具还能压缩代码，做兼容性处理，提升代码性能。

2. 打包工具：Grunt,Gulp,Parcel，**Webpack**【以一个或多个文件作为入口】，Rollup，Vite

3. 是一个**静态资源打包工具**，做**编译**成浏览器能识别的工作，将webpack 输出的文件叫bundle

4. 功能有限：

   开发模式：仅编译JS中的 ES Module语法

​		生产模式：能编译JS中的 ES Module 语法，还能压缩 JS 代码

​		webpack 仅能处理 js,json 资源，一旦遇到css其他资源会报错，借助开发模式的 loader



由于es6模块化在浏览器并不识别，故使用打包工具将其编译成浏览器可识别的，命令行： 

**npm init -v**   							     		初始化项目

**npm i webpack**【webpack】 **webpack-cli**【webpack的指令】 **-D**	

//开发环境下载



**npx webpack ./文件夹/文件名.js	--mode=development**	【开发模式】/【production生产模式，压缩代码】									npx 是将bin临时添加为环境变量即可访问其中应用程序

注意：开发模式仅能编译es模块化语法，不编译箭头函数，剩余运算符等语法

## **vue-cli创建vue项目**

（基于webpack构建应用程序，生产模式下使用，**更稳**）: vite启动**更快**，开发模式下使用，基于Rollup的插件机制方便扩展项目

```js
vue create  <项目名称> 
cd <项目名称>
npm run serve  //启动开发服务器并运行程序
```

3. ####

## 2.基本配置处理文件

1. 入口 entry

webpack  从哪个文件开始打包

2. 输出 output 

打包完文件输出到哪去，如何命名

3. 加载器 loader 

解析处理除 js，json资源外的其他资源

4. 插件 plugins 

扩展webpack功能

5. 模式 mode

开发，生产模式



1.webpack配置！！一定！！在根目录，名称webpack.config.js，固定写法：

```js
const path = require("path"); //node的path模块，处理路径
module.exports = {
    // 输入，相对路径
    entry: "./src/main.js",
    // 输出
    output: {
        // 文件输出路径，绝对路径
        path: path.resolve(__dirname, "dist"),
        // 文件名
        filename: "main.js",
    },
    // 加载器
    module: {
        rules: [
            // loarder配置
        ],
    },
    // 插件，数组
    plugins: [

    ],
    // 模式
    mode: "development",

}
```

命令行：npx webpack   进入根目录读取该目录下的webpack.config.js配置文件

若是npx webpack * * *     则读取***

## 3.开发时代码的模式

1.编译代码使浏览器可识别，加载配置编译css,font,src,html等webpack默认无法处理的资源

2.代码规范

## 4.处理css样式资源

​	webpack 仅能处理 js,json 资源，一旦遇到css其他资源会报错，借助开发模式的 loader



创建css => main 中 import引入 => 配置：官网中下载相对loader依赖 => npx webpack运行 => html代码体现 



[loader文档](https://webpack.docschina.org/concepts/loaders/)

loader配置：css与style的loader

```JS
npm i --save-dev css-loader
```

```js
npm i style-loader -D
```

webpack.config.js中加载器中loarder配置

```js
 rules: [
            // loarder配置,解析css等作为浏览器可以编译的代码
            {

                test: /\.css$/i, //仅解析css文件
                use: [
                    "style-loader", // 将js中css通过创建style标签添加到html文件中生效
                    "css-loader", //将less资源编译成commonjs的模块到js中
                ],
            },
        ],
```

启动运行webpack，使css编译后生效

```js
npx webpack
```























