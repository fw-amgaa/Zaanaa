var express = require('express');
var router = express.Router();

// HOME AND STATIC ROUTERS
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.use('/contact', (req,res) => {
  res.render('contact');
});

router.use('/login', (req,res) => {
  res.render('login');
});

router.use('/signup', (req,res) => {
  res.render('signup');
});

module.exports = router;
