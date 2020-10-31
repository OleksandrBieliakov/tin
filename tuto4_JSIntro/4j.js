function binarySearch(value, sortedList) {
    let left = 0;
    let right = sortedList.length - 1;
    let middle;
    let middleValue;
    while (left < right) {
        middle = Math.floor((left + right) / 2);
        middleValue = sortedList[middle];
        if (middleValue === value)
            return middle;
        if (value < middleValue)
            right = middle - 1;
        else
            left = middle + 1;
    }
    if(left === right && sortedList[left] === value)
        return left
    return -1;
}

let values =
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortedList =
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let print = (value, list) => console.log("looking for", value, "=> found at index", binarySearch(value, list));
values.forEach(value => print(value, sortedList));

/*// Tests
let sortedListEven = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sortedListOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let valuesEven = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let valuesOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let valuesMissing = [-1, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10];
valuesEven.forEach(value => {
    if (binarySearch(value, sortedListEven) !== value)
        throw "even";
});
valuesOdd.forEach(value => {
    if (binarySearch(value, sortedListOdd) !== value - 1)
        throw "odd";
});
valuesMissing.forEach(value => {
    if (binarySearch(value, sortedListOdd) !== -1)
        throw "missingOdd";
});
valuesMissing.forEach(value => {
    if (binarySearch(value, sortedListEven) !== -1)
        throw "missingEven";
});
valuesMissing.forEach(value => {
    if (binarySearch(value, []) !== -1)
        throw "empty";
});*/
