var express = require('express');
var router = express.Router();
var query = require('../config/orm.js')

router.get('/', function(req, resp) {
	var burgers = {
	eaten: [],
	notEaten: []
    }
	query.madeBurgers(function(result) {
		console.log(result);
		for(var i = 0; i < result.length; i ++){
			if(!result[i].burger_eaten){
				burgers.eaten.push(result[i]);
			}	else burgers.notEaten.push(result[i]); 
		}
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