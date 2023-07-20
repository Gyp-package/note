// const { json } = require('express');
const express = require('express')
const app = express()

// 1. express.json解析表单中json格式的数据到服务器
app.use(express.json())
    // 2. express.urlencoded 解析表单中的数据和url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))

app.use('/user', (req, res) => {
    // 1.服务器使用req.body 接收客户端发送来的  请求体  数据
    // 默认情况 ，不配置解析表单中间件，req,body为undefine
    console.log(req.body);
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 2.服务器端使用req.body 获取JSON格式的表单数据和url-encoded 格式的数据
    console.log(req.body);
    res.send('oook')
})

app.listen(80, () => {
    console.log('80端口监听中');
})