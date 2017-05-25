var express = require('express');
var router = express.Router();
var query = require('../config/orm.js')

router.get('/', function(req, resp) {
	var burgers = {
	eaten: [],
	notEaten: []
    }
	query.madeBurgers(function(result) {
		// for(var i = 0; i < result.length; i ++){
		// 	if(result.burger_eaten[i]){
		// 		console.log('Burger fount');
		// 		burgers.eaten.push(result.burger_eaten[i]);
		// 	}	else burgers.notEaten.push(result.burger_eaten[i]); 
		// }
		console.log(result);
		resp.render('index', {eaten: burgers.eaten, 
							  notEaten: burgers.notEaten})
	});
});


router.put('/:id', function(req, resp) {
	var id = req.params.id;  
	query.eatingBurger(id);
	resp.redirect('/');
});


router.post('/', function(req, resp){
	var burger = req.body.burger_type;
	query.makeBurger(burger);
	resp.redirect('/');
});

router.delete('/:id', function(req, resp){
	var id = req.params.id;
	query.cleanPlate(id);
	resp.redirect('/');
})


module.exports = router;