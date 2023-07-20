// 普通版BF
function BF_Ordinary(sourceStr, searchStr) {
    let sourceLength = sourceStr.length;
    let searchLength = searchStr.length;
    let padding = sourceLength - searchLength; //循环次数
    // BBC ABB ABCF => 搜索9次
    for (let i = 0; i <= padding; i++) {
        if (searchStr.charAt(i) == searchStr.charAt(0)) {
            // 匹配成功的数据
            let complete = searchLength;
            for (let j = 0; j < searchLength; j++) {
                if (sourceStr.charAt(i + j) == searchStr.charAt(j)) {
                    --complete;
                    if (!complete) {
                        return i;
                    }
                }
            }
        }
    }
    return -1;
}
you


// 优化后的BF算法：设置节流阀
function BF_Optimize_l(sourceStr, searchStr) {
    let mainLength = sourceStr.length;
    let searchLength = searchStr.length;
    let padding = mainLength - searchLength;
    for (let offset = 0; offset <= padding; offset++) {
        // 设置节流阀
        let match = true;
        for (let i = 0; i < searchLength; i++) {
            // 只要不相等就取反
            if (searchStr.charAt(i) != sourceStr.charAt(offset + i)) {
                match = false;
                break;
            }
        }
        if (match) return offset;
    }
    return -1
}

function show(bf_name, fn) {
    let myDate = +new Date()
    let r = fn();
    let div = document.createElement('div')
    div.innerHTML = bf_name + '搜索位置' + r + ",耗时" + (+new Date() - myDate) + "ms" + "<br/>";

    show('BF_原始算法', function() {
        return BF_Ordinary(sourceStr, searchStr)
    })

    show('BF_优化后的算法', function() {
        return BF_Optimize_l(sourceStr, searchStr)
    })
}