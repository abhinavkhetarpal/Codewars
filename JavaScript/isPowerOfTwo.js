/* Instructions

Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

*/

/* 
Parameters: non-negative integer (i.e. n >= 0)
Returns: boolean (true/false)
Examples: isPowerOfTwo(0) -> false
          isPowerOfTwo(1) -> true
          isPowerOfTwo(2) -> true
          isPowerOfTwo(3) -> false
          isPowerOfTwo(4) -> true
          isPowerOfTwo(5) -> false
          isPowerOfTwo(6) -> false
Pseudocode:
   loop from i = 0 to n
   if 2^i == n return true
   else return false
*/

function isPowerOfTwo(n){
  for (let i = 0; i < n; i++){
    if (Math.pow(2,i) == n) return true
  }
  return false
}

// Refactored

function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n))
  }