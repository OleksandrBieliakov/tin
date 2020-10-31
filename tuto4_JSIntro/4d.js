function order(str) {
    return str.split('').sort().join('');
}

let str = "webmaster";
console.log("input \"" + str + "\", output \"" + order(str) + "\"");