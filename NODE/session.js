// 导入express模块并创建服务器
const express = require('express')
const app = express()

// 配置session中间件
const session = require('express-session')
app.use(session({
    secret: 'keyboard',
    resave: 'false',
    saveUninitialized: true
}))

// 配置后向session中存储数据，放在请求头中
req.session.userinfo = req.body;
req.session.islogin = true

//服务器端获取用户姓名的接口，向客户端发送响应
app.get('/api/username', (req, res) => {
    // 没有存储成功
    if (!req.session) {
        return res.send({
            status: 1,
            msg: 'fail'
        })
    }

    res.send({
        status: 0,
        msg: 'success',
        username: req.session.userinfo.username
    })
})

// 清空当前接口的session(例如退出登录)destory，
app.get('/api/logout', (req, res) => {
    req.session.destory();
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})