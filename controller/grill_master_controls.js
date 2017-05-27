var express = require('express');
var router = express.Router();
var query = require('../config/orm.js')

router.get('/', function(req, resp) {
    query.madeBurgers(function(result) {
        resp.render('index', { eaten: result });
    });
});


router.put('/:id', function(req, resp) {
    var id = req.params.id;
    query.eatingBurger(id);
    resp.redirect('/');
});


router.post('/:burger?', function(req, resp) {
    var popularBurger = req.params.burger;
    if (popularBurger) {
        query.makeBurger(popularBurger);
    } else {
        var burger = req.body.burger_type;
        query.makeBurger(burger);
        resp.redirect('/');
    }
});

router.delete('/:id', function(req, resp) {
    var id = req.params.id;
    query.cleanPlate(id);
    resp.redirect('/');
})


module.exports = router;
