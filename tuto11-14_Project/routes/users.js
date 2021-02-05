var express = require('express');
var router = express.Router();
var db_service = require('../db_service');
var getUsers = db_service.getUsers;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getUsers());
});

module.exports = router;
