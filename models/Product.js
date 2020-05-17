const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  supplierPrice:{
    type: Number,
    required: true
  },
  productPrice:{
    type: Number,
    required: true
  },
  imageURL:{
    type: String,
    required: true
  },
  categories:{
    type: Array,
  },
  tags:{
    type: Array,
  },
  description:{
    type: String,
  },
  quantity:{
    type: Number,
    default: 0
  },
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;
