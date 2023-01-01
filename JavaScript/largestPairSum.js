/* Instructions

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/

/* 
Parameters: array of integers ; >= 2 in size
Returns: integer ; sum of largest pair of numbers (consecutive/non-consecutive) in array
Examples: largestPairSum([10,14,2,23,19]) -> 42
          largestPairSum([99,2,2,23,19]) -> 122
          largestPairSum([-100,-29,-24-19,19]) -> 0
          largestPairSum([1,2,3,4,6,-1,2]) -> 10
          largestPairSum([-10,-8,-16,-18,-19]) -> -18
Pseudocode:
  // set variable maxSum = sum of first 2 elements of array (we cannot set it to 0 as array could have negative integers)
  // loop through array length - 1
  // at each index, loop through the remaining elements of the array and add elements from subsequent indexes to element at current index
  // store pairSum in a variable and compare to sum, if pairSum > maxSum, maxSum = pairSum 
  // return maxSum
*/

function largestPairSum (numbers) {
    let maxSum = numbers[0] + numbers[1]
    for (let i = 0, j = numbers.length - 1; i < j ; i++){
      for (let k = i + 1 ; k <= j ; k++){
        let pairSum = numbers[i] + numbers[k]
        if (pairSum > maxSum) maxSum = pairSum
      }
    }
    return maxSum
  }

// Refactored

function largestPairSum(numbers){
    let largeToSmall = [...numbers].sort((a,b) => b-a)
    return largeToSmall[0] + largeToSmall[1]
}