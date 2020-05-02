const express = require('express');
const router = express.Router();

//get products
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get products api'
  });
});

//post products
router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'POSt products api'
  });
});

//get products by :id
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  
});

module.exports = router;
