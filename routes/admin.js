var express = require('express')
var router = express.Router();

router.use('/dashboard', (req,res) => {
  res.render('admin-dashboard');
});

router.use('/profile', (req,res) => {
  res.render('admin-profile');
});

router.use('/products', (req,res) => {
  res.render('admin-products');
});

router.use('/posts', (req,res) => {
  res.render('admin-posts');
});

module.exports = router;
