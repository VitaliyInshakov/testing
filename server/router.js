const Auth = require('./controllers/authentication');
const passportService = require('./services/passport.js');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'Super secret code is 11111' });
  });
  app.post('/signin', requireSignin, Auth.signin);
  app.post('/signup', Auth.signup)
}