var express = require('express');
var router = express.Router();
var checkAuthenticated = require('../authenticationCheck').checkAuthenticated;

/* GET home page. */
router.get('/', checkAuthenticated, function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/teams');
});

module.exports = router;
