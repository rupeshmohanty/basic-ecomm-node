const express = require('express');
const router = express.Router();
const md5 = require('md5');

// importing the schemas!
let User = require('../models/User.model.js');

// register user!
router.post('/register',(req,res) => {
	const { email, name, password } = req.body;

	// if fields are not present!
	if(!email || !name || !password) {
		res.json({
			status: false,
			message: "Please fill all the details!"
		});
	} else {
		User.findOne({email: email})
			.then(user => {
				if(user) {
					res.json({
						status: false,
						message: "User already exists!"
					})
				} else {
					const newUser = new User({
						email,
						name,
						password
					})

					// hashing password!
					const hashedPassword = md5(password);

					// change newuser password to hashed password!
					newUser.password = hashedPassword;

					newUser.save()
						.then(() => {
							res.json({
								status: true,
								message: "User registered successfully!"
							})
						})
						.catch(err => console.log(err));
				}
			})
			.catch(err => console.log(err));
	}
});

// login user!
router.post('/login',(req,res) => {
	const { email, password } = req.body;

	if(!email || !password) {
		res.json({
			status: false,
			message: "Please fill all the details!"
		})
	} else {
		User.findOne({email: email})
			.then(user => {
				if(user) {
					const dbPassword = user.password;
					const encPassword = md5(password);
					if(dbPassword === encPassword) {
						res.json({
							status: true,
							message: "Logged in successfully!",
							userId: user._id
						})
					} else {
						res.json({
							status: false,
							message: "Password is invalid!"
						})
					}
				} else {
					res.json({
						status: false,
						message: "No such user exixts!"
					})
				}
 			})
			.catch(err => console.log(err));
	}
})

module.exports = router;