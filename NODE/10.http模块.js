// 引入http模块
const http = require('http')
    // 创建web服务器实例
const server = http.createServer()
    // 服务器绑定request事件，监听客户端请求
server.on('request', (req, res) => {
        console.log('someone visit our web server!');
    })
    // 启动服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1:80');
})