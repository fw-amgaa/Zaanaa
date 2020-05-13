var express = require('express')
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const Category = require('../models/ProductCategory');

router.use('/dashboard',ensureAuthenticated,(req,res) => {
  res.render('admin-dashboard');
});

router.use('/profile', ensureAuthenticated,(req,res) => {
  const { username,password,email,f_name,l_name,city,country,postalCode} = req.user;
  res.render('admin-profile', { username,password,email,f_name,l_name,city,country,postalCode});
});

router.use('/products', ensureAuthenticated,async (req,res) => {

  let categories = await Category.find({});

  console.log(categories);

  res.render('admin-products',{categories});
});

router.use('/posts', ensureAuthenticated,(req,res) => {
  res.render('admin-posts');
});

module.exports = router;
