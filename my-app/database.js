const { createPool } = require('mysql');
const express = require("express");
const app = express();


const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "Uptalk",
  connectionLimit: 100
})


// pool.query('select * from login', (err, result, fields)=>{
//   if (err){
//     return console.log(err);
//   }
//   return console.log(result);
// })



pool.query(function(err) {
  if (err) {
  console.log("Connected!");
  var sql = "INSERT INTO login (email, password) VALUES ('pokemon@wu.com', 'test')";
  pool.query(sql, function (err, result) {
    if (err){}
    console.log("1 record inserted");
  });
}});

// my-app.listen(3000, () =>{
//   console.log("running server")
// })