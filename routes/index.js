var express = require('express');
var router = express.Router();

function applyRoutes(passport, mongoose, message) {
	/* GET home page. */
	router.get('/', function(req, res, next) {
		var name = req.user ? req.user.firstName + ' ' + req.user.lastName : 'nobody';

		res.render('index', {
			title: 'Express',
			userName : message.profile ? JSON.stringify(message.profile) : 'nobody'
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
