const express = require('express')
const app = express()

app.use(function(req, res, next) {
    const time = Date.now()
        // 为req对象，挂载自定义属性，从而把时间共享给后面所有路由
    req.startTime = time
    next()
})

app.get('/', (req, res) => {

    res.send('Home page.' + req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User page.' + req.startTime)
})


app.listen(80, () => {
    console.log('80端口已启动')
})