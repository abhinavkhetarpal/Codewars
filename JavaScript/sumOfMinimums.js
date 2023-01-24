/* Instructions

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

*/

/* 
Parameters: non-empty array containing positive integers
Returns: integer
Examples: sumOfMinimum([[1,2,3],[4,5,6]]) -> 1 + 4 = 5
Pseudocode:
  // use reduce method on array
  // use Math.min and spread syntax to add the minimum value of each element
  // return the result of the reduce method
*/

function sumOfMinimums(arr) {
    return arr.reduce((a,b) => a + Math.min(...b),0)
  }