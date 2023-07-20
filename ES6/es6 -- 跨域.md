url：协议 :// 主机 : 端口号 / 路径 / ? 额外参数(键值对)

额外参数，键值对·&分割，客户端提供给服务器端(JSON格式)，获取服务器端数据（script），服务器通过额外参数执行代码

### 1.跨域：同源策略

网站之间 协议(http)，主机(localhost.com)，访问端口(80端口)   相同

#### 出现跨域问题即非同源问题时

1.影响读取cookie，localstorage，IndexedDB，DOM以及ajax请求

#### 解决跨域：

#### 1.JSONP,仅支持GET

核心原理：**服务器**通过额外参数执行代码，将函数外包一个 js 函数再以**JSON**数据的**形式**回传给客户端，客户端 调用并执行函数，即获取数据

缺点：只支持GET,，不支持CORS,

#### 2.CORS,兼容性

1.客户端添加origin:协议，主机。端口

2.服务端响应头传：协议，主机，端口。即Access-Control-Allow-Origin:

3.安装npm i cors,express,使用node不需要script引用，使用同一个端口即可

1.  JS 部分

```js
const express = require('express')
const cors = require('cors')
const app = express()

app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST']
    })
)
app.get('/', (req, res) => {
    res.json({
        "name": 'gyp',
        "like": 'reading'
    })
})
```

2. 客户端部分

   ```html
     <script>
           fetch("http://127.0.0.1:8000", {
                   method: 'GET'
               })
               .then(response => response.json())
               .then(data => console.log(data.like))
       </script>
   ```

   

#### 3.反向代理

服务器端设置~，客户端请求~，反向代理再把请求转给服务器，

nginx.conf设置api端口以及响应头部分



