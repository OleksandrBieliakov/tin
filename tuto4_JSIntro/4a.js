const factorialRecursive = n => {
    if (n === 0 || n === 1)
        return 1;
    return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++)
        factorial *= i;
    return factorial
}

let n = 10;
console.log("Factorial (recursive) of", n, "is", factorialRecursive(n));
console.log("Factorial (iterative) of", n, "is", factorialIterative(n));