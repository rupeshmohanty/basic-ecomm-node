const express = require('express');
const router = express.Router();

// importing the schemas!
let Product = require('../models/product.model.js');

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
		categoryId,
		categoryName
	})

	console.log(productDetails);

	productDetails.save()
	.then(() => {
		res.json({
			status: true,
			message: 'Product and category created!'
		})
	})
	.catch(err => console.log(err));
})

module.exports = router;