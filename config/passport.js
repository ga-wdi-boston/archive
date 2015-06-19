var passport = require('passport'),
	GithubStrategy = require('passport-github').Strategy;

var githubClientID,
	githubClientSecret;

function configurePassport(mongoose) {
	var User = mongoose.model('User');

	passport.use(new GithubStrategy({
			// credentials have since been revoked
			clientID : '01bea1cd4e583bf97a9d', // get these from Github
			clientSecret : 'd689ed9ed0f245aa351e4cdf42e09fc537bbc408', // get these from Github
			callbackURL : "https://ga-wdi-passport-github.herokuapp.com/login/callback"
		}, function(accessToken, refreshToken, profile, done) {
			// see https://github.com/jaredhanson/passport-github
			User.findOne({
				githubId : profile.id,
			}, function(err, user) {
				if(err) {
					return done(err);
				}
				if(user) {
					return done(null, user)
				}

				User.create({
					githubId : profile.id,
					displayName : profile.displayName,
					url : profile.profileUrl
				}, function(err, user) {
					if(err) {
						return done(err);
					}

					done(null, user);
				});
			});
		}));

	passport.serializeUser(function(user, done) {
		done(null, user.githubId || user.id);
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
