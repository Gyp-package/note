// 与49.5搭配,构建GET与POST接口
const express = require('express')
const app = express()
    // 获取URL-encoded格式的请求体数据
app.use(express.urlencoded({ extended: false }))

// 3. 必须在配置 cors 中间件之前配置JSONP接口
app.get('/api/jsonp', (req, res) => {
    // 定义JSONP接口具体实现过程
    // 1.得到函数名称
    const funcName = req.query.callback
        // 2.定义发送到客户端1的对象
    const data = { name: 'GYP', age: 20 }
        // 3.拼接函数的调用 cb()，转为字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
        // 4.拼接字符好惨响应给客户端
    res.send(scriptStr)
})

// 2. 务必在路由之前使用cors模板，解决跨域问题
const cors = require('cors')
app.use(cors())


// 1. 导入路由模块
const router = require('./49.5.apiRouter')
    // 把路由模块注册到app上
app.use('/api', router)

app.listen(80, () => {
    console.log('80端口监听成功');
})