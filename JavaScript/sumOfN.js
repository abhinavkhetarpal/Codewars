/* Instructions

A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]

*/

/*
Parameters: integer
Returns: array 
Examples: sumOfN(-5) -> [0,-1,-3,-6,-10,-15]
          sumOfN(0) -> [0]
          sumOfN(5) -> [0,1,3,6,10,15]
Pseudocode:
  // create an array of size Abs(n) + 1
  // fill the array with 0s
  // map array --> each element is the sum of numbers from 0 to index i
    // if n < 0 negate each sum (except for 0)
    // else return each sum
  // return the modified array
*/

function sumOfN(n) {
    let arr = Array(Math.abs(n)+1).fill(0).map((x,i) =>{
      for (let j=1; j <= i; j++){
        x += j
      }
      if (n < 0 && i > 0) return -x
      else return x
    })
    return arr
  };

