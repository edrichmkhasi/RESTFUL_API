const express = require('express');
const router = express.Router();

//get products
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get products api'
  });
});

//post products
// status(201) request successfully
router.post('/', (req, res, next) => {
  const project = {
    title: req.body.title,
    link: req.body.link,
    description: req.body.description
  }

  res.status(201).json({
    message: 'POSt products api',
    createdProject: project
  });
});

//get products by :id
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;

});


//update products by :id
router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;

});

//delete products by :id
router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;

});

module.exports = router;
