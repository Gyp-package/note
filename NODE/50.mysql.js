// 导入mysql
const mysql = require('mysql')
    // 建立与mysql数据库的联系
const db = mysql.createPool({
        host: '127.0.0.1', //数据库ip地址
        user: 'root', //登录数据库账号
        password: 'admin123', //登录数据库密码
        database: 'login' //指定操作哪个数据库
    })
    // db.query测试指定sql语句能否执行， select 1 仅检测能否正常工作， 无实质意义
    // db.query('select 1', (err, results) => {
    //     if (err) return console.log(err.message);
    //     console.log(results);
    // })

// 查询 demo 表中的所有用户数据
// const sqlStr = 'select * from user'

// db.query(sqlStr, (err, results) => {
//     // 查询失败
//     if (err) return console.log(err.message);
//     // 查询成功,执行结果得到对象的数组
//     console.log(results);
// })

// 1.插入数据
// 要插入到 user 表中的数据对象
// const user = { name: 'SuperGYP', pwd: '123456' }

//     // 待执行的sql语句， ？ 表示占位符
// const sqlStr1 = 'insert into user(name,pwd) values (?,?)'

//     // 使用数组形式，依次为 ? 占位符指定具体的值
// db.query(sqlStr1, [user.name, user.pwd], (err, results) => {
//     if (err) return console.log(err.message);
//     // 受影响的行是1
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功')
//     }
// })

// 2.简便插入
// const str1 = { name: '指针xx', pwd: '1232xx2' }

// mqsql语句，
// const str2 = 'insert into user SET ?'

// db.query(str2, str1, (err, results) => {
//         if (err) return console.log(err.message);
//         console.log(results)
//         if (results.affectedrows === 1) {
//             console.log('插入成功');
//         }
//     })

// 更新数据
// const user = { name: '指针', pwd: '1232xx2' }

// mqsql语句，方法1
// const user1 = 'update user set pwd=? where name=?'

// mqsql语句，方法2：
// const user1 = 'update user set ? where name=?'

// 法1对应mysql
// db.query(user1, [user.pwd, user.name], (err, results) => {

// 法2对应传值
// db.query(user1,[user.name],(err,results)=>{
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('更新数据成功');
// })

// 删除操作 推荐使用id
// const sqlStr3 = {name:'我',pwd:555}

// const sqlStr2 = 'delete from user where name=?'
// db.query(sqlStr2, '我', (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('删除成功');
//     }
// })

// 标记删除
const sqlStr5 = 'update user set status=? where id=?'
db.query(sqlStr5, [1, 5], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('标记删除成功');
    }
})