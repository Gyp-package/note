// 1.配置session中间件
const express = require('express');
let session = require('express-session');
// 配置session中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// 2.使用session中间件，增加用户信息
// 登录的api口
app.post('/api', (req, res) => {
        if (req.body.username !== 'admin' || req.body.password !== '000') {
            return res.send({ status: 1, msg: '登陆失败' })
        }
        // 将登陆后的用户信息保存到session中
        req.session.user = req.body;
        req.session.islogin = true;
        res.send({ status: 0, msg: '登陆成功' })
    })
    // 获取用户的接口：
app.get('api', (req, res) => {
        if (!req.session.islogin) {
            return res.send({ status: 1, msg: 'fail' })
        }
        res.send({
            status: 0,
            msg: 'success',
            username: req.session.user.username
        })
    })
    // 清空

// 导入用于生成JWT字符串的包
const jwt = require('jsonwebtoken')
    // 导入用于将客户端发送过来的JWT字符串解析还原成JSON对象的包
const expressJWT = require('express-jwt')
    // 密钥的本质是字符串
const secretKey = 'itheima No1'