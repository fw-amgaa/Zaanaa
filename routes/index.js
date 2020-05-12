var express = require('express');
var router = express.Router();
const passport = require('passport');

const User= require('../models/User')

// HOME AND STATIC ROUTERS
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/contact', (req,res) => {
  res.render('contact');
});

router.get('/login', (req,res) => {
  res.render('login');
});

router.get('/logout', (req,res) => {
  req.logout();
  req.flash('success_msg','You Have Logged Out');
  res.redirect('/login');
});

router.post('/login', (req,res,next) => {
  passport.authenticate('local',{
    successRedirect: '/admin/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
  })(req,res,next)
});

router.get('/signup', (req,res) => {
  res.render('signup');
});

router.post('/signup', (req,res) => {
  const {username,email,password,password2,fname,lname,city,country,postalCode} = req.body
  let errors =[];

  if(!username||!email||!password||!password2||!fname||!lname||!city||!country||!postalCode){
    errors.push({msg:'Please fill in all fields!'})
  }

  if(password != password2){
    errors.push({msg:'Password do not match!'})
  }

  if(password.length < 8){
    errors.push({msg:'Password should be atleast 8 characters!'})
  }

  if(errors.length > 0){
    res.render('signup',{errors,username,email,password,password2,fname,lname,city,country,postalCode});
  }else{

    User.findOne({ email: email })
      .then(u => {
	if(u){
	  // User Exists
	  errors.push({msg:'User Already Exists!'})
	  res.render('signup',{errors,username,email,password,password2,fname,lname,city,country,postalCode});
	}else{
	  const newUser = new User({
	    username,
	    password,
	    email,
	    'f_name' : fname,
	    'l_name' : lname,
	    city,
	    country,
	    postalCode,
	  });
	  
	  newUser.save().then( (user) => {
	    req.flash('success_msg','You Have Successfully Registered!');
	    res.redirect('login')
	  } ).catch( (e)=> console.log(e) );
	}
      })
  }

});

module.exports = router;
