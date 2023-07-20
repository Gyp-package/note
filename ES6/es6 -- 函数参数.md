1.允许函数参数设置默认值，直接写在参数定义后面

```js
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```

2.参数变量默认声明，不能let再次声明

```js
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
```

3.参数默认值函数不能有同名参数

```js
// 不报错
function foo(x, x, y) {
  // ...
}

```

4.参数每次都重新计算默认值表达式

```js
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101
```

5.函数参数（对象，变量）设置默认值，若接受参数解构后得到变量值，否则默认值

```js
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
```

6.函数参数（不是为变量，对象）指定默认值，而不是变量x,y指定默认，有返回值

```js
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```

7.函数的length属性（函数预期传入的参数个数），指定默认值的话Length失真，若设置了默认值不是尾参数，length不计入后面参数

```js
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2

//若设置了默认值不是尾参数，length不计入后面参数
function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
```





























