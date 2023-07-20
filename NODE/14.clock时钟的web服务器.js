// 1.导入需要模块
const http = require('http')
const fs = require('fs')
const path = require('path')
    // 2.1 创建基本web服务器
const server = http.createServer()
    // 2.2 监听web 服务器的request事件
server.on('request', function(req, res) {
        // 3.1 获取到客户端的url地址
        const url = req.url
            // 3.2将资源的请求url地址值映射为文件存放路径 
            // const fpath = path.join(__dirname, url)

        // 5.优化资源请求路径
        let fpath = ' '
        if (url === '/') {
            fpath = path.join(__dirname, './clock/index.html')
        } else {
            fpath = path.join(__dirname, '/clock', url)
        }

        // 4.读取文件内容并响应给客户端(成功与否)
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) return res.end('404 not found!')
            res.end(dataStr)
        })
    })
    // 2.3 启动web服务器
server.listen(80, () => {
    console.log('server listen at http://127.0.0.1');
})