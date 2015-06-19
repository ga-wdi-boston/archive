var passport = require('passport'),
	GithubStrategy = require('passport-github').Strategy;

var githubClientID,
	githubClientSecret;

function configurePassport(mongoose) {
	var User = mongoose.model('User');

	passport.use(new GithubStrategy({
			// credentials have since been revoked
			clientID : '01bea1cd4e583bf97a9d', // get these from Github
			clientSecret : '67934eb0ec4f3d67af08e0037091c910b4e224f9', // get these from Github
			callbackURL : "https://ga-wdi-passport-github.herokuapp.com/login/callback"
		}, function(accessToken, refreshToken, profile, done) {
			// see https://github.com/jaredhanson/passport-github
			User.findOrCreate({
				githubId : profile.id
			}, function(err, user) {
				return done(err, user);
			});
		}));

	passport.serializeUser(function(user, done) {
		done(null, user.githubId);
	});

	passport.deserializeUser(function(id, done) {
		User.findOne({
			githubId : id
		}, function(err, user) {
			done(err, user);
		});
	});

	return passport;
}

module.exports = configurePassport;
