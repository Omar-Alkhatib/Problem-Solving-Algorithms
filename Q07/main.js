console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(arr) {
  // YOUR CODE HERE
  let oddSum = 0
  for (i= 0 ; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddSum = oddSum + arr[i]
    }
  }
  return oddSum
}


// Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8

