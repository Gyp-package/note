$(function() {
    // 点击li 不要执行 页面滚动事件
    // 节流阀，互斥锁
    let flag = true;
    let toolTop = $(".recom").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    // 页面1滚动到哪个区域，相应导航添加删除current 类名
    $(window).scroll(function() {
            toggleTool();
            if (flag) {

                $(".floor .w").each(function(i, ele) {
                    if ($(document).scrollTop() >= $(ele).offset().top) {
                        $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                    }
                })
            }
        })
        // 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        let current = $(".floor .w").eq($(this).index()).offset().top
            // 页面动画滚动
        $("body,html").stop().animate({
                scrollTop: current
            }, function() {
                flag = true;
            })
            // 点击之后，当前 li 添加current，姐妹移除
        $(this).addClass("current").siblings().removeClass();
    })

})