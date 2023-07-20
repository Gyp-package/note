const express = require('express')
    // 创建路由对象
const router = express.Router()

// 挂载获取用户列表的路由
router.get('/user/list', (req, res) => {
    res.send('Get user list')
})

// 挂在添加用户的路由
router.post('/user/add', (req, res) => {
    res.send('Add new user')
})

// 向外导出路由对象给44号文件
module.exports = router