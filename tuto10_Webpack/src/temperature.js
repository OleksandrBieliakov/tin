export function calculateCelsius (fahrenheitDegrees) {
    return ((parseFloat(fahrenheitDegrees) - 32) / 1.8).toFixed(2)
}

export function calculateFahrenheit (celsiusDegrees) {
    return (parseFloat(celsiusDegrees) * 1.8 + 32).toFixed(2)
}

export function calculateKelvin (celsiusDegrees) {
    return (parseFloat(celsiusDegrees) + 273.15).toFixed(2)
}

export function calculateCelsiusFromKelvin (kelvinDegrees) {
    return (parseFloat(kelvinDegrees) - 273.15).toFixed(2)
}
