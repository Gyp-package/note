const express = require('express')
const app = express()

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/60.tongyuan.html');
})

app.get('/data', (req, res) => {
    res.send('用户数据');
})

app.listen(9000, () => {
    console.log('服务启动');
})