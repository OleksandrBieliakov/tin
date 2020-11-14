function calculateCelsius (fahrenheitDegrees) {
  return Math.round((fahrenheitDegrees - 32) / 1.8)
}

function calculateFahrenheit (celsiusDegrees) {
  return Math.round(celsiusDegrees * 1.8 + 32)
}

const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')

fahrenheit.addEventListener('change', () => {
  if (fahrenheit.value === '') { fahrenheit.value = 0 }
  updateCelsius()
})

celsius.addEventListener('change', () => {
  if (celsius.value === '') { celsius.value = 0 }
  updateFahrenheit()
})

function updateCelsius () {
  celsius.value = calculateCelsius(fahrenheit.value)
}

function updateFahrenheit () {
  fahrenheit.value = calculateFahrenheit(celsius.value)
}

// On button click implementation
const from = document.getElementById('from')
const to = document.getElementById('to')
const fromLabel = document.getElementById('from-label')
const toLabel = document.getElementById('to-label')
const revertButton = document.getElementById('revert')
const convertButton = document.getElementById('convert')

revertButton.addEventListener('click', () => {
  revert()
})

convertButton.addEventListener('click', () => {
  convert()
})

function revert () {
  let tmp = fromLabel.textContent
  fromLabel.textContent = toLabel.textContent
  toLabel.textContent = tmp
  tmp = from.name
  from.name = to.name
  to.name = tmp
  tmp = from.value
  from.value = to.value
  to.value = tmp
}

function convert () {
  if (from.value === '') { from.value = 0 }
  to.value = from.name === 'celsius' ? calculateFahrenheit(from.value) : calculateCelsius(from.value)
}
