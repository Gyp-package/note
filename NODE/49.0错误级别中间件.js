const express = require('express')
const app = express()
    // 定义路由
    // app.get('/user', (req, res) => {
    //     // 自定义错误,发生崩溃，无法在终端发送响应
    //     throw new Error('服务器内部发生错误')
    //     res.send('Home page')
    // })

// 错误中间件
app.use('/user', (err, req, res, next) => {
    console.log('发生错误' + err.message);
    res.send('Error' + err.message)
})

app.listen(80, () => {
    console.log('Express server running!');
})