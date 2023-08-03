// 创建一个名为 minimumDeviation 的函数，接收一个名为 nums 的参数
const minimumDeviation = function(nums) {
  // 创建一个最大堆实例
  const maxHeap = new Heap();
  // 初始化 ans 为正无穷大，记录最小偏差
  let ans = Infinity;
  // nums的每个元素
  for (let num of nums) {
    // 如果 num 是奇数，则 val 为 num 的两倍，否则 val 为 num
    const val = num % 2 ? num  * 2: num ;
    // 将 val 插入最大堆中
    maxHeap.insert(val);
  }

  // 当 ans 大于 0 且堆顶元素是偶数时
  while (ans > 0 && maxHeap.top() % 2 === 0) {
    // 移除最大堆的堆顶元素，并将其赋值给 max
    const max = maxHeap.extract();
    // 将 max 的一半插入最大堆中
    maxHeap.insert(max >> 1);
    // 更新 ans，使其为 ans 和最大堆堆顶元素与最大堆的最小值之差的较小值
    ans = Math.min(ans, maxHeap.top() - maxHeap.end);
  }
  // 返回 ans
  return ans;
};

// 定义一个名为 Heap 的类
class Heap {
  constructor() {
    // 创建一个空数组以存储堆的元素
    this.container = [];
    // 初始化堆的末尾值为正无穷大
    this.end = Infinity;
  }

  // 定义插入元素的方法，接收一个名为 val 的参数
  insert(val) {
    // 更新堆的末尾值，使其为 val 和当前堆的末尾值的较小值
    this.end = Math.min(this.end, val);
    const container = this.container;
    // 将 val 添加到堆的末尾
    container.push(val);
    let index = container.length - 1;
    // 当 index 不为 0 时执行循环
    while (index) {
      // 计算 index 的父节点索引
      const parent = (index - 1) >> 1;
      // 如果父节点的值大于等于当前节点的值，跳出循环
      if (container[parent] >= container[index]) break;
      // 交换父节点和当前节点的值
      [container[parent], container[index]] = [container[index], container[parent]];
      // 将索引更新为父节点索引
      index = parent;
    }
  }

  // 定义移除堆顶元素的方法
  extract() {
    const container = this.container;
    const len = container.length;
    // 如果堆为空，返回 null
    if (!len) return null;
    // 如果堆中只有一个元素，直接弹出该元素并返回
    if (len === 1) return container.pop();
    // 交换堆顶元素和堆尾元素
    [container[0], container[len - 1]] = [container[len - 1], container[0]];
    // 弹出堆尾元素，并将其赋值给 max
    const max = container.pop();
    let index = 0;


    // 执行循环，将当前节点与其子节点进行比较和交换
    while (true) {
      // 计算当前节点的左子节点索引和右子节点索引
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let largest = index;
      // 如果左子节点存在且左子节点的值大于当前节点的值，将 largest 更新为左子节点的索引
      if (left < len && container[left] > container[largest]) {
        largest = left;
      }
      // 如果右子节点存在且右子节点的值大于 largest 对应的节点的值，将 largest 更新为右子节点的索引
      if (right < len && container[right] > container[largest]) {
        largest = right;
      }
      // 如果 largest 不等于 index，说明找到了比当前节点更大的子节点
      if (largest !== index) {
        // 交换当前节点和 largest 对应的节点的值
        [container[largest], container[index]] = [container[index], container[largest]];
        // 将索引更新为 largest
        index = largest;
      } else {
        // 否则跳出循环
        break;
      }
    }
    // 返回移除的堆顶元素
    return max;
  }

  // 定义获取堆顶元素的方法
  top() {
    // 如果堆为空，返回 null
    if (!this.size()) return null;
    // 返回堆顶元素
    return this.container[0];
  }

  // 定义获取堆大小的方法
  size() {
    // 返回堆的长度
    return this.container.length;
  }
}