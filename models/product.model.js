const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating schema for product!
const productSchema = new Schema({
	productId: {
		type: Number,
		required: true
	},
	productName: {
		type: String,
		required: true
	},
	qtyPerUnit: {
		type: Number,
		required: true
	},
	unitPrice: {
		type: Number,
		required: true
	},
	unitInStock: {
		type: Number,
		required: true
	},
	discontinued: {
		type: Boolean,
		required: true
	},
	categoryId: {
		type: Number,
		required: true
	}
})

const Product = mongoose.model('product',productSchema);

module.exports = Product;