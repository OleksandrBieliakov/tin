var express = require('express');
var router = express.Router();

/* POST operations. */
router.post('/', function (req, res, next) {
    let requestJson = req.body;
    let num1 = parseFloat(requestJson.num1);
    let num2 = parseFloat(requestJson.num2);
    let operation = requestJson.operation;
    let result = calculate(num1, num2, operation);
    let resultJson = {"result": result};
    res.json(resultJson);
});

module.exports = router;

function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
    }
    return result;
}