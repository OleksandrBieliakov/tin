var express = require('express');
var router = express.Router();
var passport = require('passport');
var checkNotAuthenticated = require('../authenticationCheck').checkNotAuthenticated;

router.get('/', checkNotAuthenticated, function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

module.exports = router;
