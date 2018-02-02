const passport  = require('passport');
const User = require('../models/user');
const config = require('../config');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email: email }, (error, user) => {
    if(error) return done(error);
    if(!user) return done (null, false);

    user.comparePassword(password, (error, match) => {
      if(error) return done(error);
      if(!match) return done(null, false);
      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (error, user) => {
    if(error) return done(error, false);

    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);