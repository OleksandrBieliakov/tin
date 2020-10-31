function longestWord(str) {
    let words = str.split(' ');
    if (words.length === 0)
        throw "The string does not contain any words";
    let longestWord = words[0];
    let longestWordLength = longestWord.length
    for (let i = 1, currentWord, currentWordLength; i < words.length; i++) {
        currentWord = words[i];
        currentWordLength = currentWord.length;
        if (currentWordLength > longestWordLength) {
            longestWord = currentWord;
            longestWordLength = currentWordLength;
        }
    }
    return longestWord;
}

let str = "This is the LONGEST word";
console.log("The longest word in \"" + str + "\" is \"" + longestWord(str) + "\"");