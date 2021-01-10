console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function longestWord_2(sen) {
  const noNeed = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,-.<>\/?~]/;
  const wordsArr = sen.split(" ");
  let str = "";
  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i].split("");
    const count = word.length;
    for (let i = 0; i < count; i++) {
      if (noNeed.test(word[i])) {
        word.splice(i, 1);
      }  
    }
    if (str.length < word.join().length) {
      str = word.join("");
    }
  }
  return str;
}

/*
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/
