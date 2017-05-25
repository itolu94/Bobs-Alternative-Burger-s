
var mysql = require('mysql');


var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: 'PChem_Death383.',
	  database: 'bobs_alternative_burgersdb'
  });
}
 connection.connect();
 
module.exports = connection; 