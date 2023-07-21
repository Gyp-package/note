1. 之前看ts和webpack时有了解一点babel的插件，比如将 ts 转为旧版 js 可以理解执行的代码

```js
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

2. es6中babel可以转为es5，从而在浏览器或其他环境运行，配置文件为  ``.babelrc``, 根目录之下，

```js
npm i --save-dev babel-preset-latest	//进行安装
```

设置转码规则和插件

```babelrc
{
	"presets":[
	 "lasest",
	],
	"plugins":[]
}
```

 



















