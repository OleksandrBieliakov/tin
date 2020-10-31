function amountToCoins(amount, coins) {
    let result = [];
    if (amount === 0)
        return result
    if (coins.length === 0)
        throw "At least one coin face-value must be provided";
    let i = 0;
    let value = coins[0];
    while (amount > 0) {
        if (amount >= value) {
            result.push(value);
            amount -= value;
        } else {
            i++;
            if (i < coins.length)
                value = coins[i];
            else
                throw "Not all needed face-value coins have been provided, try adding coin with value 1";
        }
    }
    return result;
}

let amount = 46;
let coins = [25, 10, 5, 2, 1];
console.log("amount", amount, "using", coins, "result:", amountToCoins(amount, coins));