
var mysql = require('mysql');

var mysqlCredentials = require('./mysql.js');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'PChem_Death383.',
	database: 'bobs_alternative_burgersdb'
});


module.exports = connection; 