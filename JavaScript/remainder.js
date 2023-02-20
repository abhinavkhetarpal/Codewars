/* Instructions

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

*/

/*
Parameters: two integers
Returns: remainder of dividing larger integer by smaller integer ; division by 0 should return NaN
Examples: remainder(0,1) -> NaN
          remainder(0,-1) -> 0
          remainder(1,2) -> 0
          remainder(17,5) -> 2
Pseudocode:
  // find out the maximum of the two integers and store it in a variable called max
  // find out the minimum of the two integers and store it in a variable called min
  // return max % min
*/

function remainder(n, m){
    let max = Math.max(n,m)
    let min = Math.min(n,m)
    return max % min
}

// One line solution

const remainder = (n,m) => Math.max(n,m) % Math.min(n,m)

// Alternative one liner

const remainder = (n,m) => n > m ? n % m : m % n