// 导入fs模块
const fs = require('fs');
// 1.调用readfile方法读取
fs.readFile('./1.txt', 'utf8', function(err, dataStr) {
        // console.log(err);
        // console.log('-----------');
        // console.log(dataStr);
        // console.log('\n');
        // 2.判断文件是否读取成功
        // if (err) {
        //     return console.log('文件读取失败' + err.message);
        // }
        // console.log('文件读取成功，内容：' + dataStr);
    })
    // const fs = require('fs');
    // 3.调用writeFile方法写入
fs.writeFile('./1.txt', 'abcd', function(err) {
    console.log(err);
})