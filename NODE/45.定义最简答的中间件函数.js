const express = require('express')
const app = express()
    // 1. 定义一个最简单的中间件函数
    // const mw = function(req, res, next) {
    //         console.log('这是一个最简单的中间件函数');
    //         // 调用Next函数， 表示把流转关系转交给下一个中间件或路由
    //         next()
    //     }
    //     // 将 mw 注册为全局生效的中间件,可以交给后面的路由
    // app.use(mw)

// 2. 简化全局中间件
app.use(function(req, res, next) {
    console.log('一个简单函数');
    next()
})

app.get('/', (req, res) => {
    console.log('调用了/路由');
    res.send('Home page.')
})

app.get('/user', (req, res) => {
    console.log('调用了user路由');
    res.send('User page.')
})

// 1.最简单的服务器创建
app.listen(80, () => {
    console.log('80端口响应成功');
})