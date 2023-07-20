const express = require('express')
const app = express()

const mw1 = function(req, res, next) {
    console.log('我是中间件111函数');
    next()
}

const mw2 = function(req, res, next) {
        console.log('我是中间件222函数');
        next()
    }
    // 先交给中间件处理，再交给后面路由处理函数
app.get('/', mw1, mw2, function(req, res) {
    res.send('Home page')
        // next()
})

app.get('/user', function(req, res) {
    res.send('Use page')
})

app.listen(80, () => {
    console.log('局部生效的端口监听中');
})