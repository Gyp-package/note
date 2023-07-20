  // 5.导入格式化时间的自定义函数
  const TIME = require('./30.格式化时间传统做法')

  // 6.调用格式化时间的函数
  const dt = new Date()
  const newDT = TIME.dateFormat(dt)
  console.log(newDT);