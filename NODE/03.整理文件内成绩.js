const fs = require('fs')
fs.readFile('./成绩.txt', 'utf-8', function(err, dataStr) {
    // 1.判断文件读取成功
    if (err) {
        return console.log('文件读取失败' + err.message);
    }
    console.log('文件读取成功，内容:' + dataStr);

    //2.处理成绩
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    console.log(arrNew);
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
    fs.writeFile('./成绩-OK.txt', newStr, function(err) {
        if (err) {
            return console.log('文件读取失败' + err.message);
        }
        console.log('成绩写入成功');
    })
})