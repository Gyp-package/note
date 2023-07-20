const http = require('http')
const server = http.createServer()
    // req是请求对象，包含客户端的相关数据和属性
server.on('request', (req, res) => {
    // req.url 是 客户端请求的URL地址
    const url = req.url
        // req.method 是 客户端请求的方法
    const method = req.method
    const str = `你打开的地址端口是 ${req.url},请求的方法是 ${req.method}`

    // 防止中文乱码，设置响应头Content-Type值为 text/html;charset=utf-8
    res.setHeader('Content-Type', 'text/html;charset=utf-8')

    console.log(str);
    // 调用res.end()向客户端响应内容
    res.end(str)
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})