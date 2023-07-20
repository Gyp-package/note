<!-- 包的说明文档 -->
<!-- 安装方式、导入式、格式化时间、转义中的特殊字符、还原中的特殊字符、还原HTML中的特殊字符、开源协议 -->
## 安装
```
npm install Gyp-tools
```

## 导入
```js
const gyp = require('./Gyp-tools/')
```

## 格式化时间
```js
// 调用dateFormat对时间格式化
const dtStr = gyp.dateFormat(new Date())
// 结果 2022-10-09 19:10:18
console.log(dtStr);
```

## 转义HTML中的特殊字符
```js
// 待转换的HTML字符
const htmlStr = '<h1 title="abc">我是h1标签<span>123&nbsp</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = gyp.htmlEscape(htmlStr)
// 转换结果 &lt;h1 title=&quot ; abc&quot ;&gt ;我是h1标签&lt ; span&gt ; 123&amp; nbsp& lt; / span&gt ;&lt ;/h1&gt; 
console.log(str);
```

## 还原特殊字符
```js
// 待还原的特殊字符
const str1 = '&lt;h1 title=&quot;abc&quot;&gt;我是h1标签&lt;span&gt;123&nbsp&lt;/span&gt;&lt;/h1&gt; '
// 调用 htmlUnEscape 方法进行转换
const str2 = gyp.htmlUnEscape(str1)
// 转换结果 <h1 title=" abc" >我是h1标签<span> 123&nbsp< / span>< /h1>
console.log(str2);
```

## 开源协议
ISC