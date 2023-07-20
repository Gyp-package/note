// 获取express模板
const express = require('express')
    // 创建web服务器
const app = express()
    // 设置监听窗口
app.listen(800, () => {
        console.log('800窗口正在监听');
    })
    // 获取客户端请求以及向客户端发送响应
app.get('/gyp', (req, res) => {
    // 发送JSON对象请求
    res.send({ 'name': 20, 'hobby': 'read & study', 'desire': 'technology' })
})

app.post('/gyp', (req, res) => {
    res.send('post向客户端发送字符串请求成功啦')
})

// req.query 获取到客户端发送过来的 查询参数
app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

// req.params是动态匹配参数
app.get('/users/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})