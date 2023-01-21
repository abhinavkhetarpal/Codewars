/* Instructions

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

*/

/*
Parameters: array
Returns: array
Examples: flattenAndSort([[3,2,1],[4,6,5],[9,7,8]]) -> [1,2,3,4,5,6,7,8,9]
Pseudocode:
// use reduce method on input array to flatten it by concatenating each element to a new array
// sort the new array in numerically ascending order
// return the new array

*/

function flattenAndSort(array) {
    let flat = array.reduce((a,b) => a.concat(b), [])
    return flat.sort((a,b) => a - b)
  }