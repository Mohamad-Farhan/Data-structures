console.log('Problem Solving Q: 13');

/* find Highest Possible Sum */

/*  
Write a function that calculates the Highest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).
*/

function findHighestPossibleSum(arr, n) {
  let largestSum = Number.NEGATIVE_INFINITY;
  let sum = 0
  let index = 0
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
    index += 1
    if (index === n) {
      if (sum > largestSum) {
        largestSum = sum;
      }
      index = 0
      sum = 0
      i -= n - 1;
    }
  }
  return largestSum;
}

/*
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1) // => 10
Examples:
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2) // => 14
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3) // => 16
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23

findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29


findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19
findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
findHighestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32
findHighestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36
*/