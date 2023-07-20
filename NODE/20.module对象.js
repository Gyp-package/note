// console.log('找到我啦哈哈哈哈');
const age = 20
module.exports.username = 'superGyp'
module.exports.sayHello = function() {
    console.log('Hello, World! ');
}
module.exports.age = age

//最终向外共享的结果永远都是 module.exports指向的对象
// module.exports = {
//     nickname: '小黑',
//     sayHi() {
//         console.log('Hi');
//     }
// }

// 默认情况exports与module.exports指向同一个对象
const username1 = 'GYP'
exports.username1 = username1
exports.age1 = 30
exports.sayHello1 = function() {
    console.log('我是 exports 指向的');
}