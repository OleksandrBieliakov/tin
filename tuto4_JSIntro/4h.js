function secondSmallestBiggest(numbers) {
    if (numbers.length < 2)
        throw "The input must contain at least to numbers";

    let smallest = Math.min(numbers[0], numbers[1]);
    let secondSmallest = Math.max(numbers[0], numbers[1]);
    let biggest = secondSmallest;
    let secondBiggest = smallest;

    for (let i = 2, number; i < numbers.length; i++) {
        number = numbers[i];
        if (number > biggest) {
            secondBiggest = biggest;
            biggest = number;
        } else if (number < smallest) {
            secondSmallest = smallest;
            smallest = number;
        } else {
            if (number < secondSmallest)
                secondSmallest = number;
            if (number > secondBiggest)
                secondBiggest = number;
        }
    }
    return [secondSmallest, secondBiggest];
}

let numbers = [9, 3, 4, 1, 6, 5, 2, 0, 8, 7];
let result = secondSmallestBiggest(numbers);
console.log("second smallest", result[0], "second biggest", result[1]);