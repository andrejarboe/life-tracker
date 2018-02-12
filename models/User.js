const mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

UserSchema.pre('save', function(next){
  const newUser = this;
  if (!newUser.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
      if(err) return next(err);

      bcrypt.hash(newUser.password, salt, function(err, hash){
          if(err) return next(err);

          newUser.password = hash;
          next();
      });
  });
});

module.exports = User;