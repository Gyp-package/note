#### [2634. 过滤数组中的元素](https://leetcode.cn/problems/filter-elements-from-array/)

输入：arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
输出： [20,30]
解释：
const newArray = filter(arr, fn); // [20, 30]
过滤函数过滤掉不大于 10 的值

 

使用reduce返回数组值

```js
var filter = function(arr, fn) {
  return arr.reduce((pre,cur,index)=>{
​    if(fn(cur,index)){
​      pre.push(cur)
​    }
​    return pre
  },[])
};
```

