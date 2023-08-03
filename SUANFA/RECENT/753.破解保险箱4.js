function crackSafe(n, k) {
    // 计算出最高位的初始值，例如 n=3，则 highest=100
    const highest = Math.pow(10, n - 1);  //10的 n-1 次幂返回浮点数
    // 初始化答案字符串
    let ans = "";
    // 创建一个 Set 对象，用于记录已经访问的密码序列
    const seen = new Set();
    
    // 定义深度优先搜索函数 dfs，
    const dfs = node => {
      // 遍历密码的所有可能取值
      for (let x = 0; x < k; x++) {
        // 根据当前节点和新的取值，构造新节点
        let nei = node * 10 + x;
        // 如果新节点未被访问过，则将其添加到已访问集合，并递归调用 dfs 函数
        if (!seen.has(nei)) {
          seen.add(nei);
          dfs(nei % highest);
          // 将当前取值添加到答案字符串中
          ans += x;
        }
      }
    };
  
    // 从初始节点 0 开始进行深度优先搜索
    dfs(0);
  
    // 在答案字符串中添加 n-1 个 0，作为结尾的辅助部分
    for (let i = 1; i < n; i++) {
      ans += "0";
    }
  
    return ans;
  }
  