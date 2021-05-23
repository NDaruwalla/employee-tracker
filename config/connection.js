 //connect to mysql 
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'theFLUME2021',
  database: 'synergyEmployees'
});

module.exports = connection;