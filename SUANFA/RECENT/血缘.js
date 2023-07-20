const fs = require('fs');
function minDistance(str){
    // 分割字符串
    const [dna1,dna2] = str.split(',');
    
    // 序列2长度为空
    if(!dna2){
        return dna1.length;
    }
    
    // 获取两个序列长度
    const length1 = dna1.length;
    const length2 = dna2.length;

    //创建了一个长度为 length1 + 1 的数组,为每个元素调用一个回调函数(将返回一个长度为 length2 + 1 的数组)。
    let dp = Array.from({length: length1 + 1 },() => new Array(length2+1).fill(0));
    
    //初始化第一行一列
    for(let i = 1;i <= length1; i++){
        dp[i][0] = i;
    }
    for(let j = 1;j <= length2; j++){
        dp[0][j] = j;
    }

    //动态规划最小变异
    for(let i = 1;i <= length1;i++){
        for(let j = 1;j <= length2;j++){
            // 如果序列一和序列二对应相等，取对角数字
            if(dna1[i-1] === dna2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
            // 不等则取上左以及左上的最小数
                dp[i][j] = Math.min(  
                    dp[i-1][j]+1,
                    dp[i][j-1]+1,
                    dp[i-1][j-1]+1
                    )
            }
        }
    }
    // 返回最后的数字
    return dp[length1][length2];
}
// 这里的 readFileSync(0) 中的 0 是文件描述符，0 是指的是stdin （ 1 是 stdout ）
let lines = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/);
let res = minDistance(lines[0]);
console.log(res);