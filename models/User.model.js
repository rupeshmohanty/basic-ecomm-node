const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating schema for category!
const UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

const User = mongoose.model('user',UserSchema);

module.exports = User;