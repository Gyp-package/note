//涉及读文件，导入fs模块
const fs = require('fs')
    // 涉及路径处理，导入path模块
const path = require('path')
    // 定义正则表达式分别匹配style和script结点，\s 空白字符，\S 非空白字符，* 表示匹配任意次，[ ] 表示匹配所有字符
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
    // 读取 HTML 文件
fs.readFile(path.join(__dirname, '/08.clock.html'), 'utf8', function(err, dataStr) {
    // 读取文件失败
    if (err) {
        return console.log('读取HTML文件失败' + err.message);
    }
    // 读取文件成功后，调用对应三个方法，分别拆接触css,html,js文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 定义处理css 样式的方法,提取style样式表  
function resolveCSS(htmlStr) {
    // exec搜索函数
    const r1 = regStyle.exec(htmlStr)
        // console.log(r1);
        // 将提取出来的字符串进行replace替换,
        // 提取style样式表(包含css样式)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
        // 调用fs.writeFile()方法，将提取样式写入clock目录中index.css中
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
        if (err) {
            return console.log('写入CSS样式失败' + err.message);
        }
        console.log('写入CSS样式成功');
    })
}

// 定义处理JS脚本方法
function resolveJS(htmlStr) {
    // 获取字符串
    const r2 = regScript.exec(htmlStr)
        // 提取script字符串并置空，获取返回值
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
        // console.log(newJS);
        // 调用fs.writeFile方法，写入index.js中
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
        if (err) return console.log('写入JS脚本失败' + err.message);
        console.log('写入JS脚本成功');
    })
}

// 定义处理HTML结构方法
function resolveHTML(htmlStr) {
    // 将原css样式以及 js 脚本使用链接替换并获取返回值
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')
        // 写入index.html文件中
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
        if (err) return console.log('写入 HTML 文件失败' + err.message);
        console.log('写入HTML 页面成功')
    })
}