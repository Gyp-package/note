## 1.解决回调地狱

### 2.promise 的两种对应：

1. resolve   ---   then 表示成功

2. reject   ---  catch   表示失败

   ```js
   const isPregnant = true;
   const promise = new Promise((resolve,reject)=> {
       if(isPregnant) {
   		resolve(`孩子爹`);
       } else {
   		reject(`老公`)
       }
   })
   promise
   		.then(name=>{
       	console.log(`男人成为了${name}`)
       	.catch(name=>{
           console.log(`男人成为了${name}`)
           })
       	.finally(()=>{
           console.log(`二位结婚了`)
           })
   })
   //true时，男人成为孩子爹，二位结婚
   //false，
   ```

   3. 图片举例

```js
const jsdom = require('jsdom')

const {
    JSDOM
} = jsdom;

const dom = new JSDOM(`<html><head></head><body></body></html>`)

const document = dom.window.document;


const imgAddress = `https://i1.hdslb.com/bfs/archive/f0df146a4b38d628ea21c5257c9658057643dda2.jpg@672w_378h_1c_!web-search-common-cover.avif`
const imgPromise = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject(new Error('图片有误'))
        };
    })
}
imgPromise(imgAddress)
    .then(img => {
        document.body.appendChild(img)
    })
    .catch(err => {
        document.body.innerHTML = err;
    })
```

3.可以因为resolve和reject可以进行异步处理得知任务进度