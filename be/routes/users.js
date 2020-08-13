var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'relay17',
database : 'ilovedschool'
});
connection.connect();
router.get('/', function (req, res, next) {
console.log(res);
connection.query('SELECT * from students', (error, rows, fields) =>{
if(error) throw error;


res.json(rows);
});

/* GET users listing. */


});


// 해당 유저 데이터 출력
router.get('/:name', function(req, res, next ){
let user=[];
connection.query('SELECT * from students',(error, rows, fields) =>{
user = rows.find(u => u.name ===req.params.name);
res.json(user);
});

});

// 해당 학교 유저들 데이터 출력
router.get("/:school", function (req, res, next) {
  let user = [];
  connection.query('SELECT * from students', (error, rows, fields) => {
    user = rows.find(u => u.school === req.params.school);
    res.json(user);
  });
});

// user 데이터 DB에 삽입
router.post('/insert', function (req, res, next) {
let sql = 'INSERT INTO students VALUES (?,?,?,?)';
let name = req.body.name;
let school = req.body.school;
let favors = req.body.favors;
let graduatedYear = req.body.graduatedYear;
console.log(req.body);
console.log(req.graduatedYear);
let params = [name, school, favors, graduatedYear];
connection.query(sql, params,(err,rows,fields) => {
res.send(rows);
}
)
});



module.exports = router;
