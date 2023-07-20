// 导入模板
const mysql = require('mysql')
    // 与mysql数据库连接
const db = mysql.createPool({
        root: '127.0.0.1',
        user: 'root',
        password: 'admin123',
        database: 'login'
    })
    // 判断连接成功
    // db.query('select 1', (err, results) => {
    //     if (err) return console.log(err.message);
    //     console.log(results);
    // })
    // 插入

// const user = { username: '555', password: '555', caonima: '555' }
// const str1 = 'insert into try1 SET ?'
// db.query(str1, user, (err, results) => {
//     if (err) return console.log(err.message);
//     // if (results.affectedrows === 1) {
//     else {
//         console.log('插入成功');
//     }
// })

// 更新
// const upd = { username: '555', password: '6666', caonima: '6666' }
// const upd1 = 'update try1 set password=?,caonima=? where username=?'
// db.query(upd1, [upd.password, upd.caonima, upd.username], (err, results) => {
//     if (err) return console.log(err.massage);
//     if (results.affectedRows === 1) {
//         console.log('更新成功');
//     }
// })

// 删除,占位符为 1 个时，直接填写值
const sqltry = 'delete from try1 where caonima=?'
db.query(sqltry, 111, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('删除成功了');
    }
})