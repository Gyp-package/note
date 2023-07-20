const express = require('express')
const app = express()

app.use(function(req, res, next) {
    console.log('调用了第1个中间件');
    next()
})

app.use(function(req, res, next) {
    console.log('调用了第2个中间件');
    next()
})

app.use('/user', function(req, res) {
    res.send('Home page.')
})

// 创建了简单服务器
app.listen(80, () => {
    console.log('800端口启动');
})