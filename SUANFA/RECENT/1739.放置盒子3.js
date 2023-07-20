var minimumBoxes = function(n) {
    let cur= 0; //总盒子数
    let i = 0; //每一层的盒子
    let j = 0; //第几层
    while(cur < n) {
        j++;
        i += j;
        cur += i;
    }
    if (cur == n) {
        return i;
    }

    cur -= i; //总盒子数多了，减去上一层的盒子
    i -= j;   //i取上一层的盒子数
    j = 0;  //重置为0
    while(cur < n) { //总盒子数小于给定总数，
        j++;    //层数自加
        cur += j;//重算总数
    }
    return i+j;//最小堆叠
};