// 计算strArr字符串的next数组 在主函数中移动时取前一位的形式（相当于右移）
function caculateNext(strArr) {
    // 先全部赋0
    nextArr = new Array(strArr.length).fill(0);
    let j;
    // 从第一位也就是第二个字符开始比较
    for (let i = 1; i < strArr.length; i++) {
        j = nextArr[i - 1]

        while (j >= 0 && strArr[j] !== strArr[i]) {
            // 其实这里利用了数组负索引返回undefined因此当j-1小于0时会直接退出循环
            // if(j-1<0)  {
            //  j = -1
            //  break
            // }
            j = nextArr[j - 1];
        }
        // 如果能继续上一位的相等情况，就在上一位基础上加1，否则就使用默认值0
        if (j >= 0) nextArr[i] = j + 1;
    }
    // // 第一位赋值-1，方便后续的移位操作
    // nextArr[0] = -1;
    return nextArr
}