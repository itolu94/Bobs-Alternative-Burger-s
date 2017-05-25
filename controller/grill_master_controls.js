var express = require('express');
var router = express.Router();
var query = require('../config/orm.js')
var burgers = {
    eaten: [{
            ordered_burger: 'Chicken Noodle'
        },
        { ordered_burger: 'Double Cheese' }
    ],
    notEaten: [{
        ordered_burger: 'Thia Curry'
    }, {
        ordered_burger: 'Pad Thai'
    }]
};
router.get('/', function(req, resp) {

    query.madeBurgers(function(result) {
        // for(var i = 0; i < result.length; i ++){
        // 	if(!result[i].burger_eaten){
        // 		burgers.eaten.push(result[i]);
        // 	}	else burgers.notEaten.push(result[i]); 
        // }
        resp.render('index', {
            eaten: burgers.eaten,
            notEaten: burgers.notEaten
        })
    });
});


router.put('/:id', function(req, resp) {
    var id = req.params.id;
    query.eatingBurger(id);
    resp.redirect('/');
});


router.post('/', function(req, resp) {
    var burger = req.body.burger_type;
    query.makeBurger(burger);
    resp.redirect('/');
});

router.delete('/:id', function(req, resp) {
    var id = req.params.id;
    query.cleanPlate(id);
    resp.redirect('/');
})


module.exports = router;
