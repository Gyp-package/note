请你编写一个函数，它的参数为一个整数数组 nums 、一个计算函数 fn 和初始值 init 。返回一个数组 归约后 的值。

你可以定义一个数组 归约后 的值，然后应用以下操作： val = fn(init, nums[0]) ， val = fn(val, nums[1]) ， val = fn(val, nums[2]) ，... 直到数组中的每个元素都被处理完毕。返回 val 的最终值。

如果数组的长度为 0，它应该返回 init 的值。

请你在不使用内置数组方法的 Array.reduce 前提下解决这个问题。
 示例 1：

输入：
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
输出：10
解释：
初始值为 init=0 。
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
Val 最终值为 10。

1.使用forEach将每一个参数传入进行累加

```js
var reduce = function(nums, fn, init) {
    //fn 函数已经定义好,传入当前数组值作为参数计算
    nums.forEach((val=>{
        init = fn(init,val)
    }))
    return init
};
```

reduce累加器作用：数组过滤filter,数组映射map

```js
const filteredArr = arr.reduce((pre, cur) => {
  if (/* 符合筛选条件 */) {
      //放进pre数组中
    pre.push(cur);
  }
  return pre;
}, []);
```

