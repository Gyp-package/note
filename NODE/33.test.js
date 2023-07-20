const gyp = require('./Gyp-tools/')
    // 格式化时间   
const dtStr = gyp.dateFormat(new Date())
console.log(dtStr);
console.log('-------------------');

const htmlStr = '<h1 title="abc">我是h1标签<span>123&nbsp</span></h1>'
const str = gyp.htmlEscape(htmlStr)
console.log(str);
console.log('-------------------');


const str1 = '&lt;h1 title=&quot;abc&quot;&gt;我是h1标签&lt;span&gt;123&nbsp&lt;/span&gt;&lt;/h1&gt; '
const str2 = gyp.htmlUnEscape(str1)
console.log(str2);