var express = require('express');
var router = express.Router();

function applyRoutes(passport, mongoose) {
	/* GET home page. */
	router.get('/', function(req, res, next) {
		var name = req.user ? req.user.name : 'nobody';

		res.render('index', {
			title: 'Express',
			userName : name
		});
	});

	router.get('/login', passport.authenticate('github'));
	router.get('/login/callback', passport.authenticate('github', {
		successRedirect : '/',
		failureRedirect : '/login'
	}));

	return router;
}

module.exports = applyRoutes;
