// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    if (stringA === stringB) {
        return true;
    };
    let stringALength = stringA.length;
    let stringBLength = stringB.length;

    if (stringALength !== stringBLength) {
        return false;
    };

    const counts = {};

    for (let i = 0; i < stringALength; i++) {
        let index = stringA.charCodeAt(i) - 97;
        counts[index] = (counts[index] || 0) + 1;
    };

    for (let j = 0; j < stringBLength; j++) {
        let index = stringB.charCodeAt(j) - 97;
        if (!counts[index]) {
            return false;
        }
        counts[index]--;
    };

    return true;

};

module.exports = anagrams;
