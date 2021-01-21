// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (i = 1; i <= n; i++) {
        let str = ' '.repeat(n - i);
        let str2 = '#'.repeat(i * 2 - 1)
        console.log(str + str2 + str)
    }
}

module.exports = pyramid;
