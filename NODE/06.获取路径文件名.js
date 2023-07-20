// fpath直接导入文件路径，  引入path路径
const path = require('path')
const fpath = '/1.txt'
const fullName = path.basename(fpath)
    // 输出带后缀的文件名
console.log(fullName);

//移除文件名后缀
const nameWithoutExt = path.basename(fpath, '.txt')
console.log(nameWithoutExt);