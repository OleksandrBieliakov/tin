var express = require('express');
var router = express.Router();

/* GET hello page. */
router.get('/', function(req, res, next) {
    res.send('Hello world');
});

module.exports = router;
