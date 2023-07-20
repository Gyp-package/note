// import { writeFile } from 'fs';
const fs = require('fs')
fs.writeFile('./2.txt', 'abcd', function(err) {
        // 写入成功err为null;,失败则等于错误对象
        console.log(err);
    })
    // 4.判断写入成功与否
    // 没有盘时会报错，有盘没有文件时之间创建文件
fs.writeFile('./2.txt1', 'Hello ,SuperGYP', function(err) {
    if (err) {
        return console.log('文件写入失败' + err.message);
    }
    console.log('文件写入成功！');
})