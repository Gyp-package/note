// 盒子移动500,800
function animate(obj, target, callback) {
    //console.log(callback); 
    //callback = f(){}
    // 不断点击，定时器开得太多，速度更快,需要清除清时期
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
        // 步长值在定时器内，步长值取 为整数正数向上取整Math.ceil，负数向下取整Math.floor
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     // 调用函数
            //     callback();
            // } 等于
            callback && callback();
        }
        // 缓动效果 ，步长公式
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}