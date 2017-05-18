// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
	res.render('pages/home');
});

// route for accounts page
router.get('/accounts', function(req, res) {
	res.render('pages/accounts');
});

// route for transactions page
router.get('/transactions', function(req, res) {
	res.render('pages/transactions');
});

// route for contracts page
router.get('/contracts', function(req, res) {
	res.render('pages/contracts');
});

// route for about page
router.get('/about', function(req, res) {
	res.render('pages/about');
});

// route for contact page
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});


