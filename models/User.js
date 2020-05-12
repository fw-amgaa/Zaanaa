const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: True
  },
  password:{
    type: String,
    required: True
  },
  email:{
    type: String,
    required: True
  },
  f_name:{
    type: String,
    required: True
  },
  l_name:{
    type: String,
    required: True
  },
  address:{
    type: String
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
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model('User',UserSchema);

module.exports = User;
