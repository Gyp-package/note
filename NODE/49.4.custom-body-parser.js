// 被49.3调用
// 导入querystring模块
const qs = require('querystring')
    // 封装 中间件 函数
const bodyParser = (req, res, next) => {
    let str = ''
        // 拼接字符串
    req.on('data', (chunk) => {
            str += chunk
        })
        // 调用parse函数将字符串转化为对象
    req.on('end', () => {
        const body = qs.parse(str)
        req.body = body
        next()
    })
}

// 向外导出解析请求体数据的中间件函数
module.exports = bodyParser