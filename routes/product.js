const express = require('express');
const router = express.Router();

// importing the schemas!
let Product = require('../models/product.model.js');
let Category = require('../models/category.model.js');

// create a product and category!
router.post('/create',(req,res) => {
	const { productId, productName, qtyPerUnit, unitPrice, unitInStock, discontinued, categoryId, categoryName } = req.body;

	const productDetails = new Product({
		productId,
		productName,
		qtyPerUnit,
		unitPrice,
		unitInStock,
		discontinued,
		categoryId
	})

	const categoryDetails = new Category({
		categoryId,
		categoryName
	})

	// inserting the category details!
	categoryDetails.save()
	.then(() => {
		console.log('Category added!');
	})
	.catch(err => console.log(err));

	// inserting the product details!
	productDetails.save()
	.then(() => {
		res.json({
			status: true,
			message: 'Product and category created!'
		})
	})
	.catch(err => console.log(err));
})

// read particular product and its category!
router.get('/read/:id',(req,res) => {
	const productId = req.params.id;

	Product.find({productId: productId})
	.then((product) => {
		const categoryId = product[0].categoryId;
		Category.find({categoryId: categoryId})
		.then((category) => {
			res.json({
				status: true,
				message: 'Product and category fetched!',
				product: product,
				category: category
			})
		})
		.catch(err => console.log(err))
	})
	.catch(err => console.log(err))
})

// read all products and their categories!
router.get('/readAll',(req,res) => {
	Product.find()
	.then((product) => {
		const categoryId = product[0].categoryId;
		Category.find({categoryId: categoryId})
		.then((category) => {
			res.json({
				status: true,
				message: 'Product and category fetched!',
				product: product,
				category: category
			})
		})
		.catch(err => console.log(err))
	})
	.catch(err => console.log(err))
})

// update the product!
router.put('/update/:id',(req,res) => {
	Product.findOneAndUpdate({
		productId: req.params.id
	},req.body)
	.then(() => {
		Product.findOne({productId: req.params.id})
		.then(product => {
			res.json({
				status: true,
				message: 'Product Updated successfully!',
				product: product
			})
		})
		.catch(err => console.log(err));
	})
	.catch(err => console.log(err));
})

// delete the product!
router.delete('/delete/:id',(req,res) => {
	const productId = req.params.id;
	Product.findOneAndDelete({productId: productId})
	.then(() => {
		res.json({
			status: true,
			message: 'Product deleted successfully'
		})
	})
	.catch(err => console.log(err));
})

module.exports = router;