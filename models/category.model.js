const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating schema for category!
const CategorySchema = new Schema({
	categoryId: {
		type: Number,
		required: true
	},
	categoryName: {
		type: String,
		required: true
	}
});

const Category = mongoose.model('category',CategorySchema);

module.exports = Category;