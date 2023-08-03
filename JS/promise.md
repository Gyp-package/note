1. promise 是一个构造函数，是异步操作，本身有 all,reject,resolve方法，**原型有 then, catch方**法
2. 状态 ：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。状态由进行变为成功或者失败后保持结果称为 resolved 定型，如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
3. Promise的优势在于，可以在then方法中继续写Promise对象并返回，然后继续调用then来进行回调操作。
4. catch就是用来捕获异常的，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中。
5. all 接收一个数组参数，允许并行执行，并且在所有异步操作执行完后并且执行结果都是成功的时候才执行回调。all统一执行完三个函数并将值存在一个数组里面返回给then进行回调输出）
6. `Promise.race` 只返回最快解决或拒绝的 Promise 的结果，而不管其他 Promise 是否已经解决或拒绝。其他 Promise 的状态将被忽略。

```js

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise 2 rejected')), 1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });
  
  Promise.race([promise1, promise2, promise3])
    .then(result => {
      console.log('最快解决的 Promise 结果:', result);
    })
    .catch(error => {
      console.log('最快拒绝的 Promise 错误:', error);
    });
  
```

7. [源码

```js
const p = new Promise((resolve,reject)=>{
    resolve('fulfilled');
    reject('rejected');
})
p.then(value=>{
    log(value);
}),reason=>{
    log(reason);
}
```

