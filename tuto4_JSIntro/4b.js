function fibonacci(n) {
    if (n === 0)
        return 0;
    let previous = 0;
    let current = 1;
    for (let i = 1, tmp; i < n; i++) {
        tmp = previous;
        previous = current;
        current += tmp
    }
    return current;
}

let n = 5;
console.log("Fibonacci", n, "number is", fibonacci(n));