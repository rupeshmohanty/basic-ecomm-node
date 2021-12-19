const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.port || 5000;

// routers!
const productRouter = require('./routes/user.js');

// Mongoose connection!
mongoose.connect("mongodb+srv://rupeshmohanty:pass123@cluster0.napdc.gcp.mongodb.net/Login?retryWrites=true&w=majority",() => {
    console.log('Connected to the db!');
})

// middleware!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes!
app.use('/api',productRouter);

// Listening at port 5000!
app.listen(PORT,() => {
    console.log(`Server running at port: ${PORT}`);
}) 