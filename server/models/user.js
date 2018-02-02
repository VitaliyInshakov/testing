const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

userSchema.pre('save', next => {
  const user = this;
  bcrypt.genSalt(10, (error, salt) => {
    if(error) return next(error);
    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if(error) return next(error);
      user.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (error, match) => {
    if(error) return callback(err);
    callback(null, match);
  })
}

const model = mongoose.model('user', userSchema);
module.exports = model;