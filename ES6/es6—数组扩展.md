1.扩展运算符 ...args

1. 将一个数组转为用逗号分隔的参数序列。
2. 用于函数调用。

```js
function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);//-1,0,1,2,3
```

3. 只有函数调用时，扩展运算符才可以放在圆括号中

4. 代替apply 

```js
// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6 的写法
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2];
f(...args);
```

5. 直接将数组传入`push()`方法。

   ```js
   // ES5 的写法
   var arr1 = [0, 1, 2];
   var arr2 = [3, 4, 5];
   Array.prototype.push.apply(arr1, arr2);
   
   // ES6 的写法
   let arr1 = [0, 1, 2];
   let arr2 = [3, 4, 5];
   arr1.push(...arr2);
   ```

6. 复制数组

   ```js
   const a1 = [1, 2];
   // 写法一
   const a2 = [...a1];
   // 写法二
   const [...a2] = a1;
   ```

7. 合并数组,实现浅拷贝，修改了引用指向的值，会同步反映到新数组。

   ```js
   const arr1 = ['a', 'b'];
   const arr2 = ['c'];
   const arr3 = ['d', 'e'];
   
   // ES5 的合并数组
   arr1.concat(arr2, arr3);
   // [ 'a', 'b', 'c', 'd', 'e' ]
   
   // ES6 的合并数组
   [...arr1, ...arr2, ...arr3]
   // [ 'a', 'b', 'c', 'd', 'e' ]
   ```

   8. 与解构赋值合并































