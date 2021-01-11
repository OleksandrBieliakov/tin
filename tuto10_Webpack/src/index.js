import * as temperature from './temperature'
import * as distance from './distance'

const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')

celsius.addEventListener('change', () => {
    if (celsius.value === '') { celsius.value = 0 }
    updateFahrenheit()
    updateKelvin()
})

fahrenheit.addEventListener('change', () => {
    if (fahrenheit.value === '') { fahrenheit.value = 0 }
    updateCelsius()
    updateKelvin()
})

kelvin.addEventListener('change', () => {
    if (kelvin.value === '') { kelvin.value = 0 }
    updateCelsiusFromKelvin()
    updateFahrenheit()
})

function updateCelsius () {
    celsius.value = temperature.calculateCelsius(fahrenheit.value)
}

function updateFahrenheit () {
    fahrenheit.value = temperature.calculateFahrenheit(celsius.value)
}

function updateKelvin () {
    kelvin.value = temperature.calculateKelvin(celsius.value)
}

function updateCelsiusFromKelvin () {
    celsius.value = temperature.calculateCelsiusFromKelvin(kelvin.value)
}


const kilometers = document.getElementById('kilometers')
const miles = document.getElementById('miles')

kilometers.addEventListener('change', () => {
    if (kilometers.value === '') { kilometers.value = 0 }
    updateMiles()
})

miles.addEventListener('change', () => {
    if (miles.value === '') { miles.value = 0 }
    updateKilometers()
})

function updateMiles () {
    miles.value = distance.calculateMiles(kilometers.value)
}

function updateKilometers () {
    kilometers.value = distance.calculateKilometers(miles.value)
}

