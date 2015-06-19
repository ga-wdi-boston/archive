var express = require('express');
var router = express.Router();

function applyRoutes(passport, mongoose) {
	/* GET home page. */
	var User = mongoose.model('User');

	router.get('/', function(req, res) {
		var name = req.user ? req.user.displayName : 'nobody';

		res.render('index', {
			title : 'Express',
			userName : name
		});
	});

	router.get('/public', function(req, res) {
		// this is visible to everyone
		User.find().
			select('githubId').
			exec(function(err, docs) {
				res.render('list', {
					title : 'Member IDs',
					userName : req.user.displayName || 'nobody',
					list : docs
				});
			});
	});

	router.get('/secret', function(req, res) {
		// this is visible to all members
		var pageData = {};
		if(req.user) {
			pageData = {
				title : 'Secret Members\' Page',
				userName : req.user.displayName
			};
		} else {
			pageData = {
				title : 'Closed',
				userName : 'nobody'
			};
		}

		res.render('index', pageData);
	});

	router.get('/secret/:id', function(req, res) {
		// this page is visible only to one member
		var pageData = {};
		if(req.user && req.user.githubId === req.params.id) {
			pageData = {
				title : 'Super Secret Page',
				userName : req.user.displayName,
				good : true
			};
		} else {
			pageData = {
				title : 'Intruder Alert',
				userName : req.user && req.user.displayName || 'nobody',
				good : false
			};
		}

		res.render('secret', pageData);
	});


	router.get('/login', passport.authenticate('github'));
	router.get('/login/callback', passport.authenticate('github', {
		successRedirect : '/',
		failureRedirect : '/login'
	}));

	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}

module.exports = applyRoutes;
