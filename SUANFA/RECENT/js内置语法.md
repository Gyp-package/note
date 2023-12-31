# 常用数据结构与语法：

## Array

- push()：向数组末尾添加一个或多个元素。
- pop()：移除并返回数组的最后一个元素。
- shift()：移除并返回数组的第一个元素。
- unshift()：向数组开头添加一个或多个元素。
- concat()：将多个数组合并为一个新数组。
- join()：将数组中的所有元素组合成一个字符串。
- slice()：从原数组中截取并返回指定范围的元素。
- splice()：从数组中添加或删除元素。
- indexOf()：返回指定元素在数组中首次出现的索引。
- forEach()：对数组中的每个元素执行指定的回调函数等。

## Math

1. Math.abs(x): 返回一个数的绝对值。
2. Math.ceil(x): 向上取整，返回大于等于给定数的最小整数。
3. Math.floor(x): 向下取整，返回小于等于给定数的最大整数。
4. Math.round(x): 四舍五入，返回最接近给定数的整数。
5. Math.max(x1, x2, ...): 返回一组数中的最大值。
6. Math.min(x1, x2, ...): 返回一组数中的最小值。
7. Math.pow(x, y): 返回 x 的 y 次幂。
8. Math.sqrt(x): 返回一个数的平方根。
9. Math.random(): 返回一个大于等于 0 且小于 1 的随机数。
10. Math.sin(x): 返回一个角度的正弦值。
11. Math.cos(x): 返回一个角度的余弦值。
12. Math.tan(x): 返回一个角度的正切值。
13. Math.PI: 圆周率的近似值（π）。
14. Math.E: 自然对数的底数（e）。

## Object，

- Object.keys()：返回对象所有可枚举属性的数组。
- Object.values()：返回对象所有可枚举属性值的数组。
- Object.entries()：返回对象所有可枚举属性键值对的数组。
- Object.assign()：将一个或多个对象的属性拷贝到目标对象中。
- Object.hasOwnProperty()：检查对象是否具有指定的属性等。

## String，

- length：返回字符串的长度。
- concat()：连接两个或多个字符串，并返回新的字符串。
- indexOf()：返回指定字符在字符串中首次出现的索引。
- split()：将字符串拆分为数组。
- slice()：提取字符串的指定部分。
- trim()：去除字符串两端的空格等。



## Number，

- toFixed()：将数字转换为字符串，保留指定小数位数。
- toPrecision()：将数字转换为字符串，根据指定的有效数字进行格式化。
- toString()：将数字转换为字符串。

## Boolean，

- !：逻辑非运算符，对布尔值取反。
- &&：逻辑与运算符，用于判断多个条件是否都为真。
- ||：逻辑或运算符，用于判断多个条件是否有一个为真。

## Set，

- Set.add()：向集合中添加一个元素。
- Set.delete()：从集合中删除一个元素。
- Set.has()：判断集合中是否存在某个元素。
- Map.set()：向映射中添加一个键值对。
- Map.get()：获取映射中指定键对应的值。
- Map.has()：判断映射中是否存在某个键。

## Map，

- `size`：返回 Map 中键值对的数量。
- `set(key, value)`：向 Map 中设置指定键的值。
- `get(key)`：获取指定键对应的值。
- `has(key)`：判断 Map 中是否存在指定键。
- `delete(key)`：从 Map 中删除指定键值对。
- `clear()`：清空 Map 中的所有键值对。
- `forEach(callback)`：遍历 Map 中的键值对，并为每个键值对执行回调函数。

## Stack，

- `push(element)`：将元素添加到栈的顶部。
- `pop()`：移除并返回栈顶的元素。
- `peek()`：返回栈顶的元素，但不对栈进行修改。
- `isEmpty()`：判断栈是否为空。
- `size()`：返回栈中元素的数量。

## Queue，

- `enqueue(element)`：向队列尾部添加一个元素。
- `dequeue()`：移除并返回队列头部的元素。
- `peek()`：返回队列头部的元素，但不对队列进行修改。
- `isEmpty()`：判断队列是否为空。
- `size()`：返回队列中元素的数量。

## 链表、

- `insert(element, position)`：在指定位置插入一个元素。
- `remove(element)`：从链表中删除指定元素。
- `indexOf(element)`：返回指定元素在链表中的索引。
- `isEmpty()`：判断链表是否为空。
- `size()`：返回链表中元素的数量。
- `display()`：以数组形式显示链表中的元素。

## 堆、

- `insert(element)`：向堆中插入一个元素。
- `remove()`：移除并返回堆顶的元素。
- `peek()`：返回堆顶的元素，但不对堆进行修改。
- `isEmpty()`：判断堆是否为空。
- `size()`：返回堆中元素的数量。

## 哈希表，

- `set(key, value)`：设置指定键的值。
- `get(key)`：获取指定键对应的值。
- `has(key)`：判断哈希表中是否存在指定键。
- `delete(key)`：从哈希表中删除指定键值对。

## 迭代器、

- `next()`：返回迭代器中的下一个元素。
- `return()`：终止迭代并返回指定值。
- `throw(exception)`：抛出一个异常。

## 生成器

- `yield`：在生成器函数中暂停执行，并将某个值返回给迭代器。
- `next()`：在生成器中执行下一步操作，并返回当前生成的值。

