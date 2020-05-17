var express = require('express')
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const Category = require('../models/ProductCategory');
const Product = require('../models/Product');

router.use('/dashboard',ensureAuthenticated,(req,res) => {
  res.render('admin-dashboard');
});

router.use('/profile', ensureAuthenticated,(req,res) => {
  const { username,password,email,f_name,l_name,city,country,postalCode} = req.user;
  res.render('admin-profile', { username,password,email,f_name,l_name,city,country,postalCode});
});

router.get('/products', ensureAuthenticated,async (req,res) => {

  let categories = await Category.find({});

  console.log(categories);

  res.render('admin-products',{categories});
});

router.post('/products', ensureAuthenticated,async (req,res) => {
  // TODO: VALIDATE DATA

  const { name,supplierPrice,productPrice,imageURL,quantity,description,tag,categories} = req.body;
  let p = new Product({name,supplierPrice,productPrice,imageURL,quantity,tag,description,categories})
  p.save();
  res.redirect('/admin/products');
  //res.render('admin-products',{ name,supplierPrice,productPrice,imageURL,quantity,description,categories});
});

router.get('/posts', ensureAuthenticated, async (req,res) => {
  let products = await Product.find({});
  console.log(products);
  res.render('admin-posts',{products});
});


module.exports = router;
