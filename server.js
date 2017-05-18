var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 6010;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// route our app
var router = require('./app/routes');
app.use('/', router);

// set static files (css, images etc) Location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
	console.log('app started');
});

