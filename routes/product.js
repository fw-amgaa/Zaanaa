var express = require('express');
var router = express.Router();

// Archive
router.get('/', function(req, res, next) {
  res.render('archive-product', { title : 'Shop' });
});

// Single
// WTF AMGAA
router.get('/:categoryName/:name', function(req, res, next) {
  res.render('single-product');
});

// Category Archive
router.get('/:categoryName', function(req, res, next) {
  res.render('archive-product' , { title : req.params.categoryName });
});


module.exports = router;
