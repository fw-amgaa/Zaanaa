const strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function(passport){
  passport.use(
    new strategy({ usernameField: 'email'},(email,password,done) => {
      User.findOne({ email: email })
	.then( user => {
	  if(!user) return done(null,false,{ msg : 'Email Is Not Registered!' });
	  
	    if(password === user.password) {
	      return done(null,user);
	    }
	
	  return done(null,false, { msg : 'Password Is Incorrect!' })
	}).catch( err => console.log(err) )
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

}
