export function calculateKilometers (miles) {
    return (parseFloat(miles) * 1.60934).toFixed(3)
}

export function calculateMiles (kilometers) {
    return (parseFloat(kilometers) * 0.62137).toFixed(3)
}
