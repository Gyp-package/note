const express = require('express');

const app = express();

// 获取绝对路径
app.get('/home', (request, response) => {
    // 响应一个页面
    response.sendFile(__dirname + '/index.html');
});

// 获取用户数据
app.get('/data', (request, response) => {
    response.send('用户数据');
});

app.listen(9000, () => {
    console.log("9000端口服务已经启动！");
})