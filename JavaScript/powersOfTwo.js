/* Instructions

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/

function powersOfTwo(n){
    return Array(n+1).fill(2).map((x,i) => Math.pow(x,i))
  }

// Refactored --> Array.from has an optional Map function argument that saves computational power as it does not create an intermediate array 

function powersOfTwo(n){
    return Array.from({length: n+1},(x,i) => Math.pow(2,i))
}