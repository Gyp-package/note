// 导入path模板
const path = require('path')

const fpath = ('/a/b/c/1.html')

// 获取带 . 后缀
const fext = path.extname(fpath)
console.log(fext);