// path路径导入
const path = require('path')
const fs = require('fs')
    // 1.   path.join(任意多个路径片段),多个路径拼接一个完整路径字符串
    // ../ 抵消前边路径 
    // const pathStr = path.join('/a','/b/c','../','./d','e')  \a\b\d\e
    // 读取当前文件下的，加path会自动去掉拼接错误的 . 
    // const pathStr2 = path.join(__dirname,'/1.txt')

// path.basename(),路径字符串中解析出文件名
fs.readFile(path.join(__dirname, '/1.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('获取信息失败' + err.message);
    }
    console.log('获取事件成功' + dataStr);
})