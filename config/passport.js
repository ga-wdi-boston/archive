var passport = require('passport'),
	GithubStrategy = require('passport-github').Strategy;

var githubClientID,
	githubClientSecret;

function configurePassport(mongoose) {
	var User = mongoose.model('User');

	passport.use(new GithubStrategy({
			clientID : githubClientID || '', // get these from Github
			clientSecret : githubClientSecret || '', // get these from Github
			callbackURL : "http://localhost:3000/login/callback"
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
