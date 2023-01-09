/* Instructions

Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15

*/

/* 
Parameters: number
Returns: number
Examples: sum(1,2,3) -> 6
          sum(8,2) -> 10
          sum(1,2,3,4,5) -> 15
Pseudocode:
  // use arguments array-like object to grab all numbers
  // convert arguments to array
  // use reduce method on array to sum all numbers & return this value
*/

function sum() {
    let args = Array.from(arguments)
    return args.reduce((a,b) => a+b)
  }

