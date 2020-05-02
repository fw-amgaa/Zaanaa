var express = require('express');
var router = express.Router();

// Archive
router.get('/', function(req, res, next) {
  res.render('archive-product');
});

// Single
router.get('/:name', function(req, res, next) {
  res.render('single-product');
});

module.exports = router;
