'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var expsHandlebars = require('express-handlebars');
var methodOverride = require('method-override');
var path = require('path')
var PORT = process.env.PORT || 8080;
var router = require('./controller/grill_master_controls.js');

var app = express();


app.engine("handlebars", expsHandlebars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.use(express.static(path.join(__dirname , 'controller')));
app.use(express.static(path.join(__dirname , 'public')));
app.use('/', router);



app.listen(PORT, function() {
	console.log('Server is is being served on localhost:%s', PORT);
}); 

