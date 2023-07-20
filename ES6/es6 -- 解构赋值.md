  [ES6](https://so.csdn.net/so/search?q=ES6&spm=1001.2101.3001.7020)允许按照一定的模式，从数组或对象中提取值，给变量进行赋值，称为解构赋值

### 1.数组的解构赋值，按次序排列，位置决定

只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

1.数组 匹配位置一 一对应赋值，可以部分赋值，对应【不完全解构】不上为undefined
2.set结构，也可以使用数组的结构赋值

```js
//1. 
let [x, y, z] = new Set(['a', 'b', 'c']);//x = "a"
//1.1.
let [x, , y] = [1, 2, 3];//x = 1 ,y // 3
//1.2
let [x, y, ...z] = ['a'];//x = "a"，y = undefined，z = []
//1.2.
let [a, [b], d] = [1, [2, 3], 4];//a = 1，b = 2，d = 4
//1.3
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;//等号右边若不可遍历，比如对象(非数组)不具备遍历器接口
let [foo] = {};//或者本身不具备遍历器借口
```

```js
//2.0
let [x, y, z] = new Set(['a', 'b', 'c']);//x = 'a'

```

### 2.对象的解构赋值，没有次序，变量与属性同名即可取值,默认undefined

对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量

1.变量名与属性名不同则Undefined

```js
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined
```

2.变量名与属性名不一致：let {属性名：将变成名称} = {   }

```js
  let {
            foo: baz
        } = {
            foo: 'aaa',
            bar: '222'
        };
 console.log(baz);//aaa

```

3.解构赋值，将现有对象赋值到变量

```js
let { sin, log, cos } = Math;
console.log(log(8)); //2.07
const { log } = console;
log('hello'); //hello
```

4.结构于嵌套结构的对象

```js
//1.p是模式
let obj = { p: ['hello', { y: 'world' }] };
let { p: [x, { y }] } = obj;
console.log(x);//hello
console.log(y);//world
//2.p是变量赋值
        let obj1 = {
            p: [
                "hello11", {
                    y: "world222"
                }
            ]
        };
        let {
            p,
            p: [x1, {
                y1
            }]
        } = obj1;
        console.log(y1);
```

5.对象的解构赋值可以取到继承的属性。

```js
const obj1 = {};
const obj2 = { foo: 'bar' }
Object.setPrototypeOf(obj1, obj2)
const { foo } = obj1;
console.log(foo); //bar,obj1继承obj2属性，foo继承obj1属性
```

6.默认值生效的条件是，对象的属性值严格等于`undefined`。

```js
const { x = 3 } = { x: undefined }
console.log(x);//3
const { y = 10 } = { y: null }
console.log(y);//null
```

7.圆括号与解构赋值的关系

1. 声明后的变量解构赋值时，需要加（）

   ```js
   //错误写法
   let x;
   {x} = {x:3})
   //正确写法：
   let x;
   ({x} = {x:3})
   ```

2. 解构赋值等号左侧可以不放置任何变量名，不违法但没必要

   ```js
   ({} = [true, false]);
   ({} = 'abc');
   ({} = []);
   ```

3. 数组本质对象，可对数组进行对象属性解构

   ```js
   const arr = [1,2,3];
   const {0:first,[arr.length-1]:last} = arr;
   console.log(first);//1
   ```

   

### 3.字符串的解构赋值

被转化为类数组的对象

```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
let {length : len} = 'hello';
len // 5
```

### 4.数值和布尔值的结构赋值

等号右边是数值布尔值先转为对象，具有tostring属性

```js
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true

//Undefined,null无法转为对象，直接结构报错
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

## 5.函数结构赋值,

###### 被解构的参数`是`传入的参数`，还是`函数参数默认值

1.函数参数，数组传参时被解构为变量参数

```js
function add([x, y]){
  return x + y;
}
add([1, 2]); // 3

[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]
```

2.函数参数（对象，变量）设置默认值，若接受参数解构后得到变量值，否则默认值

对象是参数设置默认值，无论是否传参，均默认值存在

```js
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
```

3.函数参数（不是为变量，对象）指定默认值，而不是变量x,y指定默认，有返回值

参数是对象，若参数为空对象undefined，若未传参采用默认值

```js
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```

4.undefined触发函数参数默认值

## 6.不能使用圆括号场景,区别声明语句与赋值语句

1.声明变量不能带

```js
// 全部报错
let [(a)] = [1];

let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};

let { o: ({ p: p }) } = { o: { p: 2 } };
```

2.函数参数（也属变量声明）

```js
// 报错
function f([(z)]) { return z; }
// 报错
function f([z,(x)]) { return x; }
```

3.赋值语句

```js
// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];
```

### 6.1可以使用圆括号

赋值语句的非模式部分可以用圆括号，一般尽量别用

```js
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
```

## 7.用途：

1.交换变量值

```js
let x = 4;
let y = 2;
[x, y] = [y, x];
console.log(x); //2
console.log(y); //4
```

2.允许函数返回多个值

```js
function ex() {
    return [1, 2, 3]
}
let [a, b, c] = ex()
console.log(a, b, c);//1 2 3
```

3.函数参数无关顺序，对应变量名

```js

function f1([x, y, z]) { console.log(x, y, z); }
f1([7, 8, 9]); //7,8,9

function f({ x, y, z }) { console.log(x, y, z); }
f({ z: 77, x: 88, y: 99 }); //88 99 77
```

4.提取 	[JSON](https://blog.csdn.net/weixin_52834435/article/details/123437494)	数据

```js
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```

5.函数参数默认值

6.Map遍历

```js
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
```

```js
//仅获取键名，键值
// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
```































