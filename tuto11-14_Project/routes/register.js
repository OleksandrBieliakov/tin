var express = require('express');
var router = express.Router();
var db_service = require('../db_service');
var addUser = db_service.addUser;
var bcrypt = require('bcrypt');
var checkNotAuthenticated = require('../authenticationCheck').checkNotAuthenticated;

router.get('/', checkNotAuthenticated, function(req, res, next) {
    res.render('register', { title: 'Register' });
});

router.post('/', checkNotAuthenticated, async function(req, res, next) {
    try {
        let hashed_password = await bcrypt.hash(req.body.password, 10);
        let user = {name: req.body.name, email: req.body.email, hashed_password: hashed_password};
        addUser(user);
        res.redirect('/login');
    }
    catch {
        res.redirect('/register');
    }
});

module.exports = router;
