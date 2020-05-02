const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});


// POST to create an orders
router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Order created'
  });
});


// get order by // IDEA:
router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order were fetched by id',
    orderId: req.params.orderId
  });
});

//delete an order
// get order by // IDEA:
router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order deleted',
    orderId: req.params.orderId
  });
});


module.exports = router;
