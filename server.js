const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.port || 5000;

// routers!
const productRouter = require('./routes/product.js');

// get the database uri!
const uri = require('./database');

// middleware!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Mongoose connection!
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTechnology: true },() => {
    console.log('Connected to the db!');
})

// routes!
app.use('/product',productRouter);

// Listening at port 5000!
app.listen(PORT,() => {
    console.log(`Server running at port: ${PORT}`);
}) 