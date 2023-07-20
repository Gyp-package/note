// 与49.6搭配
const express = require('express')
const router = express.Router()

// 挂载对应路由
router.get('/get', (req, res) => {
    // 1.获取到客户端通过查询字符串发送到服务器的数据
    const query = req.query
        // 2.调用res.send() 响应数据给客户端
    res.send({
        status: 0, //0表示处理成功
        msg: 'GET 请求成功!', //状态描述
        data: query //响应给客户端的数据
    })
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST 请求成功!',
        data: body
    })
})

// 定义DELETE接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功'
    })
})


module.exports = router