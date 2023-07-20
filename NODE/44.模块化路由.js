const express = require('express')
const app = express()

// 导入路由模块
const router = require('./43.router路由模块')

// 注册路由模块,路由模块挂载统一前缀
app.use('/api', router)

app.listen(80, () => {
    console.log('http://127.0.0.1');
})