const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
   _id: mongoose.Types.ObjectId,
   title: {
      type: String,
      required: true
   },
   link: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   }
})

module.exports = mongoose.model('Product', projectSchema);