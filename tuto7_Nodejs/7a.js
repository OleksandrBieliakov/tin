const http = require('http')
const url = require('url')

const server = http.createServer(function (request, response) {
  try {
    const [operation, number1, number2] = parseRequest(request)
    const result = calculate(operation, number1, number2)
    respondCalculationResult(response, operation, number1, number2, result)
  } catch (e) {
    respondError(response, e)
  }
})

function parseRequest (request) {
  const parsedUrl = url.parse(request.url, true)
  const operation = parseOperation(parsedUrl.pathname)
  const number1 = Number(parsedUrl.query.num1)
  const number2 = Number(parsedUrl.query.num2)
  checkParameter(number1, 'num1')
  checkParameter(number2, 'num2')
  return [operation, number1, number2]
}

function parseOperation (operation) {
  switch (operation) {
    case '/add':
      return '+'
    case '/sub':
      return '-'
    case '/mul':
      return '*'
    case '/div':
      return '/'
    default:
      throw Error('Not found')
  }
}

function checkParameter (parameter, parameterName) {
  if (isNaN(parameter)) throw Error('Parameter ' + parameterName + ' is not a number')
}

function calculate (operation, number1, number2) {
  switch (operation) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    case '/':
      if (number2 === 0) throw Error('Cannot divide by zero')
      return number1 / number2
    default:
      throw Error('Not supported operation')
  }
}

function respondCalculationResult (response, operation, number1, number2, result) {
  response.writeHead(200, { 'Content-type': 'text/plain' })
  response.end(number1 + operation + number2 + '=' + result)
}

function respondError (response, error) {
  response.writeHead(400, { 'Content-type': 'text/plain' })
  response.end(error.toString())
}

server.listen(8000, '127.0.0.1')
console.log('Server running at http://127.0.0.1:8000/')
