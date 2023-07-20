const express = require('express')
const app = express()

app.get('./index.html', (req, res) => {
    // 渲染的数据
    const user = { name: 'gyp', age: 20 }
        // 服务器端通过字符串·拼接，动态生成HTML内容
    const html = '<h1>姓名:${user.name},年龄:${user.age}</h1>'
        // 生成的页面发送给客户端客户端拿到真实html页面
    res.send(html)
})

app.listen(80, () => {
    console.log('80端口监听中');
})