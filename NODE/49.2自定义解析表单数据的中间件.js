const express = require('express')
const app = express()
    // 内置querystring模块，专门处理查询字符串，提供parse函数吧字符串解析为对象
const qs = require('querystring')


app.use('/user', (req, res) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })

    req.on('end', () => {
        // 将字符串解析为对象
        const body = qs.parse(str)
        console.log(body);

    })
    res.send('ok')
})


app.listen(80, () => {
    console.log('在监听啦！');
})