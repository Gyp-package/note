const fs = require('fs')
    // __dirname双下划线__dirname是指向当前文件
fs.readFile(__dirname + '/1.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    console.log('读取文件成功！' + dataStr);
})