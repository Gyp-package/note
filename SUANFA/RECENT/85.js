//首先存储左侧连续1
//左侧连续1数量为left作为宽度
// 高度为i-k+1,计算最大面积ret

var maximalRectangle = function(matrix) {
    const m = matrix.length; // 获取矩阵的行数
    if (m === 0) { // 如果矩为空，则返回0
        return 0;
    }
    const n = matrix[0].length; // 获取矩的列数
    const left = new Array(m).fill(0).map(() => new Array(n).fill(0)); 
    // 创建一个二维数组，用于存储个元素左侧连续的'1'的数量

    // 计算矩阵中每个元左侧连续的'1'数量
    for (let i = 0; i < m; i++) { // 遍每一行
        for (let j = 0; j < n; j++) { // 遍历每一列
            if (matrix[i][j] === '1') { // 如果当前元素'1'
                left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1; 
                // 计算当前元素左侧连续的'1'的数量
            }
        }
 }

    let ret = 0; // 初始化最大矩形面积0

    // 遍历矩阵中的每个元素
    for (let i = 0; i < m; i++) { // 遍每一行
        for (let j = 0; j < n; j++) { // 遍历每一列
            if (matrix[i][j] === '0') { 
                // 如果当前元为'0'，过当前迭代
                continue;
            }
            let width = left[i][j]; 
            // 将初始宽度设置为当前素左侧连续'1'的数量
            let area = width; 
            // 将初始面积设置为宽度

            // 检以当前元素作为下角可以形成的最大矩形积
            for (let k = i - 1; k >= 0; k--) { // 遍历当前行上方的行
                width = Math.min(width, left[k][j]); // 根据前面行中左侧续的'1'的最小数量更新度
                area = Math.max(area, (i - k + 1) * width); // 计算矩形的面积并更新最大面积如果必要）
            }

            ret = Math.max(ret, area); // 更新最大矩形积
        }
    }

    return ret; // 返回最大矩形面积
};
