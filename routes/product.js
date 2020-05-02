var express = require('express');
var router = express.Router();

// Archive
router.get('/', function(req, res, next) {
  res.render('archive-product');
});

module.exports = router;
