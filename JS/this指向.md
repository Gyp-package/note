1. 指向对象

对象的首层方法函数，作为对象的方法调用

```js
// 示例 1: this 指向对象
const obj1 = {
  name: 'Alice',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);

    function innerFunc() {
      console.log(`Inner this:`, this); // 内部函数中的 this 指向全局对象或 undefined
    }

    innerFunc();
  }
};

obj1.sayHello(); // 输出："Hello, Alice!" 和 "Inner this: window"（在浏览器环境中）
```

2. 指向全局对象 （浏览器中指向windows    严格模式指向undefined）

对象的函数方法使用的嵌套函数

顶层函数以及其包含的嵌套函数

```js
// 示例 2: this 指向全局对象
function outerFunc() {
  console.log(`Outer this:`, this);

  function innerFunc() {
    console.log(`Inner this:`, this); // 内部函数中的 this 指向全局对象或 undefined
  }

  innerFunc();
}

outerFunc(); // 输出："Outer this: window"（在浏览器环境中）和 "Inner this: window"（在浏览器环境中）


// 示例 3: this 指向 undefined (在严格模式下)
"use strict";

const obj2 = {
  name: 'Bob',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);

    function innerFunc() {
      console.log(`Inner this:`, this); // 内部函数中的 this 指向 undefined
    }

    innerFunc();
  }
};

obj2.sayHello(); // 输出："Hello, Bob!" 和 "Inner this: undefined"
```

3. call,apply显式的指定函数 this 指向，第一个参数会成为函数执行的 this 值
4. **bind 创建新的函数，绑定 this 的值**
5. 构造函数 new 指向构建的实例对象
6. 函数作为DOM 事件处理函数，this 指向触发事件元素

7. **this 指向 ，箭头函数没有 this 指向，会继承外层作用**，箭头函数无法通过 `call()`、`apply()` 或 `bind()` 改变 `this` 的指向，也无法使用 `new` 操作符创建实例。声明周期内频繁使用this，不能使用箭头函数
8. **创建闭包函数保存需要的 this 值 ，并在函数内部使用**

```js
function sayHello() {
  const self = this; // 保存当前的 this 值

  function innerFunction() {
    console.log(self.name);
  }

  innerFunction();
}

const obj = { name: 'Alice' };
sayHello.call(obj); // 输出：Alice

```









