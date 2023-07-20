// 1.创建格式化时间的自定义模块

// 2.定义格式化时间的方法
function dateFormat(dtStr) {
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
// 3.创建补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

// 4.从自定义模块中到处格式化时间函数
module.exports = {
    dateFormat
}