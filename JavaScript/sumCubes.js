/* Instructions

Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

*/

/*
Parameters: positive integer ; n
Returns: positive integer ; sum of cubes from 1 to n
Examples: sumCubes(1) -> 1^3 = 1 // n^3
          sumCubes(2) -> 1^3 (1) + 2^3 (8) = 9 // n^3 + (n-1)^3
          sumCubes(3) -> 1^3 (1) + 2^3 (8) + 3^3 (27) = 36 // n^3 + (n-1)^3 + (n-2)^3
          subCubes(4) -> 1^3 (1) + 2^3 (8) + 3^3 (27) + 4^3 (64) = 100 // n^3 + (n-1)^3 + (n-2)^3 + (n-3)^3
Pseudocode:
  // if n = 1 return 1 
  // else
    // return n^3 + sumCubes(n-1) 
  
  e.g.  
    // when n is 3 -> sumCubes(3) = 3^3 + sumCubes(2) = 3^3 + 2^3 + sumCubes(1) = 3^3 + 2^3 + 1
*/

function sumCubes(n){
    if (n == 1) return 1
    else return n**3 + sumCubes(n-1)
  }

// Alternative solution

function sumCubes(n){
    return [...Array(n+1).keys()].reduce((a,i) => a + i**3)
}