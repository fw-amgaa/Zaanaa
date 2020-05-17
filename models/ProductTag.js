const mongoose = require('mongoose')

const ProductTagSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  }
});

const ProductTag = mongoose.model('ProductTag',ProductTagSchema);

module.exports = ProductTag;
