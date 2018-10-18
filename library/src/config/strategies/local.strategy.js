const passport = require('passport');
const { Strategy }= require('passport-local');

module.export = function localStrategy() {
    passport.use(new Strategy(
        {
            usernameField: 'usename',
            passwordField: 'password'
        }, (username, password, done) => {
            const user = {
                username, password
            };
            done(null, user);
        }
    ));
};
