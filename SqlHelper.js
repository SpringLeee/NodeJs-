var db = {}

var mysql = require("mysql");
var conn = mysql.createConnection({
    host: '数据库地址',
    user: '用户名',
    password: '密码',
    database: '数据库'
});


conn.connect();

db.Query = function (sql,strs,fun) {

    conn.query(sql,strs,function (error, result, fields) {

        fun(error, result, fields)
    });
}


db.Commit = function (sql, strs, fun) {

    conn.query(sql, strs, function (err,result,fields) {

        fun(err, result, fields)

    })

}

module.exports = db;