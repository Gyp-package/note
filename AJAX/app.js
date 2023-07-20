//require方式引入express框架，创建网站服务器
const { response } = require('express');
const express = require('express');
// 处理路径，静态资源文件夹
const path = require('path');
const bodyParser = require('body-parser');
// 调用express方法创建网站服务器
const app = express();
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
    // 拦截静态请求，交给express.static实现静态资源访问功能,静态资源文件夹为80-public
app.use(express.static(path.join(__dirname, '80-public')));

// 请求处理函数,创建路由以及访问地址first
app.get('/first', (require, response) => {
    // 服务器端向客户端响应请求
    response.send('Hello Ajax');
});

// 请求对象require，访问对象response
app.get('/responseData', (require, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，设置允许自定义头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send({ "name": "gyp" })
})

app.get('/get', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(request.query)

})

app.post('/post', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(request.body)
})

app.post('/json', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(request.body)
})

app.get('/error', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.status(400).send('not ok')
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');
// console.log("hello");