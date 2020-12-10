var express = require('express');
var router = express.Router();

/* POST formdata. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.render('formdata', req.body);
});

module.exports = router;
