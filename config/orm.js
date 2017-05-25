'use strict';

var connection = require('./connection.js');
var date = Date();

var query = {
    madeBurgers: function(cb) {
        connection.query('SELECT * FROM burger_list', function(err, result) {
            cb(result);
        });
    },
    makeBurger: function(burger) {
        connection.query('INSERT INTO burger_list SET ?', {ordered_burger: burger, burger_eaten: 1 }, function(err, result) {
            console.log(result)
        });
    },
    eatingBurger: function(id) {
        connection.query('UPDATE burger_list SET burger_eaten = 0 WHERE ?', { 'id': id }, function(err, result) {
            console.log(result)
        
        });
    },
    cleanPlate: function(id) {
        connection.query('DELETE FROM burger_list WHERE ?', {'id': id }, function(err, result) {
        });
    }
};

module.exports = query;
