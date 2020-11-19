var mongoose = require('mongoose');
const BaseSchema = require('./BaseSchema');

var UserSchema = new BaseSchema({
	'username': {
		type: String,
		required: true,
		unique: true
	},
	'pin': {
		type: String,
		required: true
	},
	'celoPublicKey': String,
	'tx': {
		type: Object
	}
});

module.exports = mongoose.model('User', UserSchema);
