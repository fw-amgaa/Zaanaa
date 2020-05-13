const mongoose = require('mongoose')

const ProductCategorySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  },
});

const ProductCategory = mongoose.model('ProductCategory',ProductCategorySchema);

module.exports = ProductCategory;
