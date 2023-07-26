1. 使用map表示图，邻接表

```js
// 使用邻接表表示有向图
const graph = new Map();

// 添加节点及其邻居
graph.set('A', ['B', 'C']);
graph.set('B', ['A', 'D']);
graph.set('C', ['A', 'D']);
graph.set('D', ['B', 'C', 'E']);
graph.set('E', ['D']);

// 输出图的邻接表表示
console.log(graph);
```



1. 二维数组表示有向图

```js
// 使用邻接矩阵表示有向图
const graph = [
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0]
];

// 输出图的邻接矩阵表示
console.log(graph);
```



3. 自定义图

```js
class Graph {
  constructor() {
    this.nodes = new Map(); // 使用 Map 存储节点及其邻居关系
  }

  addNode(node) {
    this.nodes.set(node, []); // 添加节点，初始化其邻居为空数组
  }

  addEdge(node1, node2) {
    this.nodes.get(node1).push(node2); // 获取 node1 的邻居列表，并添加 node2
    this.nodes.get(node2).push(node1); // 获取 node2 的邻居列表，并添加 node1，注意是无向图
  }

  getNeighbors(node) {
    return this.nodes.get(node); // 获取节点的邻居列表
  }

  hasNode(node) {
    return this.nodes.has(node); // 检查图是否包含指定节点
  }

  hasEdge(node1, node2) {
    const neighbors = this.nodes.get(node1); // 获取 node1 的邻居列表
    return neighbors.includes(node2); // 检查 node2 是否为 node1 的邻居
  }
}

// 创建图实例
const graph = new Graph();

// 添加节点
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');

// 获取节点的邻居
console.log(graph.getNeighbors('B')); // 输出 ['A', 'C']

// 检查节点和边的存在性
console.log(graph.hasNode('A')); // 输出 true
console.log(graph.hasEdge('B', 'C')); // 输出 true
```

