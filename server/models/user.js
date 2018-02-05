const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

userSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if(error) return next(error);
      bcrypt.hash(user.password, salt, (error, hash) => {
        if(error) return next(error);
        user.password = hash;
        next();
      })
    })
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (error, match) => {
    if(error) return callback(error);
    callback(null, match);
  })
}

const model = mongoose.model('user', userSchema);
module.exports = model;