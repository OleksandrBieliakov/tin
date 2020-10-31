function isPrime(number) {
    for (let factor = 2; factor * factor <= number; factor++) {
        if (number % factor === 0)
            return false;
    }
    return true;
}

let prime = 13;
let notPrime = 14;
console.log("number", prime, "is prime:", isPrime(prime));
console.log("number", notPrime, "is prime:", isPrime(notPrime));