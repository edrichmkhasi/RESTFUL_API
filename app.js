/* File to handle requests */

const express = require('express');
// spin up express fuction
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// display requests on the console using morgan
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// ajust cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origine, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token');
  if (req.method === 'OPTIONS') { 
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      res.status(200).json({});
  }
  next();
});

// Connect Database
connectDB();

// Routes
app.use('/products', require('./api/routes/products'));
app.use('/orders', require('./api/routes/orders'));

// middleware to handle and pass incoming requests
// app.use((req, res, next) => {
// // status 200 for good request
//     res.status(200).json(
//       {message: 'Its working'}
//     );
// });


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

// for database related errors
app.use((error, req, res, next) => {
  res.status(error.status|| 500);
  res.json({
    error: {
      message: error.message
    }
  })
})

// export to use on other files
module.exports = app;
