var passport = require('passport'),
	GithubStrategy = require('passport-github').Strategy;

var githubClientID,
	githubClientSecret;

passport.use(new GithubStrategy({
		clientID : githubClientID || '', // get these from Github
		clientSecret : githubClientSecret || '', // get these from Github
		callbackURL : "http://localhost:3000/login/callback"
	}, function(accessToken, refreshToken, profile, done) {
		// find user from or add user to DB here, then pass it to `done` as the second argument
		// see https://github.com/jaredhanson/passport-github
	}));

// straight out of the docs
passport.serializeUser(function(user, done) {
	done(null, user.id); // set to whichever attribute is the primary key or unique index in your user schema
	// perhaps the attribute storing their github id
});

passport.deserializeUser(function(id, done) {
	// database code here for retrieving user record by the serialized value (e.g., by github id)
	// then pass it to `done` as the second arg, or pass an error to `done` as the first arg
});

module.exports = passport;
