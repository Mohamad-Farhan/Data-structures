console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function answer1(sentence) {
  let object = {};
  sentence.split("").forEach((c) => {
    if (object[c]) {
      object[c] += 1;
    } else {
      object[c] = 1;
    }
  });
  let max = Number.NEGATIVE_INFINITY;
  for (const c in object) {
    if (object[c] > max) {
      max = object[c];
    }
  }
  return max;
}


/*
Examples:
answer1('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/
