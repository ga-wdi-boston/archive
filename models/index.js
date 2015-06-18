var mongoose = require('mongoose'),
	findOrCreate = require('mongoose-findorcreate'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	githubId : {
		type : String,
		unique : true,
		required: true
	},
	createdAt : {
		type : Date,
		required: true
	},
	updatedAt : {
		type : Date,
		required : true
	}
});

userSchema.plugin(findOrCreate);

var User = mongoose.model('User', userSchema);

module.exports = mongoose;
