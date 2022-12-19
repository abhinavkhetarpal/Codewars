/* Instructions

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

/*

Parameters: array of integers
Returns: integer that appears an odd number of times
Examples: findOdd([7]) -> 7
          findOdd([0,1,0,1,0]) -> 0
Pseudocode:

1. calculate the amount of occurrences of each integer and store these numbers in an object
2. return the integer with odd amount of occurrences

*/

function findOdd(A) {
    const numIntegers = A.reduce((a,b) => {
      if (!a[b]){
        a[b] = 0
      }
      a[b]++
      return a
    },{})
    
    const stringResult = Object.keys(numIntegers).find(x => numIntegers[x] % 2 == 1)
    
    return Number(stringResult)  
  }

// Refactored for readability

function findOdd(A){
    const obj = {}
    A.forEach(x => {
        return obj[x] ? obj[x]++ : obj[x] = 1;
    })
    
    for (prop in obj){
        if (obj[prop] % 2 !== 0) return Number(prop)
    }
}

// Alternative solution

function findOdd(A){
    return A.find(x => A.filter(el => el == x).length % 2)
}