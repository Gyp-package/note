// 创建express模板
const express = require('express')
    // 创建web服务器
const app = express()
    // 设置监听端口
app.listen(80, () => {
        console.log('express server running at local');
    })
    // 向客户端响应对象
app.get('/user', (req, res) => {
    // 1. send响应JSON对象
    res.send({ name: 'gyp', age: '20', gender: 'woman' })
})

app.post('/user', (req, res) => {
        //2. send响应文本字符串
        res.send('请求成功')
    })
    // req.query 获取到客户端发送过来的 查询参数,默认为空
app.get('/', (req, res) => {
        console.log(req.query);
        res.send(req.query)
    })
    // req.params是动态匹配参数
app.get('/user/ :ids/:name', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})