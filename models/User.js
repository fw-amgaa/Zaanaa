const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  f_name:{
    type: String,
    required: true
  },
  l_name:{
    type: String,
    required: true
  },
  city:{
    type: String
  },
  country:{
    type: String
  },
  postalCode:{
    type: Number
  },
  aboutMe:{
    type: String,
    default: ''
  },
  date:{
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model('User',UserSchema);

module.exports = User;
