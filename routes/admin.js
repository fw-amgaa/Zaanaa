var express = require('express')
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.use('/dashboard',ensureAuthenticated,(req,res) => {
  res.render('admin-dashboard');
});

router.use('/profile', ensureAuthenticated,(req,res) => {
  res.render('admin-profile');
});

router.use('/products', ensureAuthenticated,(req,res) => {
  res.render('admin-products');
});

router.use('/posts', ensureAuthenticated,(req,res) => {
  res.render('admin-posts');
});

module.exports = router;
