const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../../models/products.schema');

//get all projects
router.get('/', (req, res, next) => {
  Product.find()
  .exec()
  .then(docs => {
    console.log(docs);
    if(docs.length > 0){
      res.status(200).json(docs);
    }else{
      res.status(404).json({
        message: 'No Project found'
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  });
});

//post products
// status(201) request successfully
router.post('/', (req, res, next) => {

  const project = new Product({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    link: req.body.link,
    description: req.body.description
  })

  //save and use the then() promise
  project
  .save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: 'POST products api',
      createdProject: result
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error:err
    })
  });
 
});

//get products by :id
router.get('/:projectId', (req, res, next) => {
  const id = req.params.projectId;
  Product.findById(id)
  .exec()
  .then(doc => {
    console.log(doc);
    if(doc){
      res.status(200).json(doc);
    }else{
      res.status(404).json({
        message: 'No valid entry found'
      });
    }
    
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({error: err});
  });
});


//update project by :id
router.patch('/:projectId', (req, res, next) => {
  const id = req.params.projectId;
  //check if you want to update all
  const updateOps = {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  Product.update({_id: id}, { $set: updateOps })
  .exec()
  .then(result => {
    console.log(result);
    res.status(200).json( result)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });

});

//delete products by :id
router.delete('/:projectId', (req, res, next) => {
  const id = req.params.projectId;
  Product.remove({_id: id})
  .exec()
  .then(result => {
    console.log(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error:err
    });
  })

});

module.exports = router;
