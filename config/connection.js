require('dotenv').config();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: process.env.DATABASE_PW,
  database: 'burgers_db'
})

connection.connect(function(error){
  if(error){
    console.log(error);
  }
})

module.exports = connection;