/* File to handle requests */

const express = require('express');
// spin up express fuction
const app = express();

const products = require('./api/routes/products');
//const orders = require('./api/routes/orders');

app.use('/products', require('./api/routes/products'));
app.use('/orders', require('./api/routes/orders'));

// middleware to handle and pass incoming requests
app.use((req, res, next) => {
// status 200 for good request
    res.status(200).json(
      {message: 'Its working'}
    );
});

// export to use on other files
module.exports = app;
