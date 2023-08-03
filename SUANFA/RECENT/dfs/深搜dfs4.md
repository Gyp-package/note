js没有直接内置的 DFS（深度优先搜索）函数，你需要自己编写 DFS 的实现。

使用递归

```js
function dfs(node, visited) {
  // 标记当前节点为已访问
  visited[node] = true;

  // 遍历节点的相邻节点
  for (let neighbor of graph[node]) {
    // 如果相邻节点未被访问过，则递归调用 DFS
    if (!visited[neighbor]) {
      dfs(neighbor, visited);
    }
  }
}
```



用处：

1. 遍历图 

2. 检测图的连通性

3. 检测环存在。如果遇到一个已经被访问过的节点，那么可以说明存在环。

4. 拓扑排序，向无环图中结点按照一定拓扑顺序排列



5. 迷宫求解，



6. 组合问题搜索，可以通过设定搜索深度、剪枝条件、回溯等技巧来实现。