/* File to handle requests */

const express = require('express');
// spin up express fuction
const app = express();

// middleware
app.use((req, res, next) => {
// status 200 for good request
    res.status(200).json(
      {message: 'Its working'}
    );
});

// export to use on other files
module.exports = app;
