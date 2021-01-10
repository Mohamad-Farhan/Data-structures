console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function longestWord(sen) {
  // YOUR CODE HERE
  let x = " ";
  sen = sen.split(" ");
  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length > x.length) {
      x = sen[i];
    }
  }
  return x;
}

/*
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/
