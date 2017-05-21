
var mysql = require('mysql');

var mysqlCredentials = require('./mysql.js');

var connection

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'bobs_alternative_burgersdb'
  });
}

module.exports = connection; 