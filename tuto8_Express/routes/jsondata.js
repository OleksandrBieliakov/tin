var express = require('express');
var router = express.Router();

/* POST jsondata. */
router.post('/', function(req, res, next) {
    res.render('formdata', req.body);
});

module.exports = router;
