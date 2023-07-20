// 与49.4搭配
const express = require('express')
const app = express()

// 导入自己封装的中间件模块
const customBodyParser = require('./49.4.custom-body-parser')
    // 将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})

epp.listen(80, () => {
    console.log('进行模块化拆分');
})