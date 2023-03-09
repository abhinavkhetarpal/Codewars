/* Instructions

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

*/

/* 
Parameters: array of numbers ; array.length > 1
Returns: array of numbers that are multiples of their own index
Examples: multipleOfIndex([2,4,6,8,10]) -> [4,6]
          multipleOfIndex([22, -6, 32, 82, 9, 25]) ->  [-6, 32, 25]
Pseudocode:
// filter through array and check if element modulo index is equal to 0
// return new array
*/

function multipleOfIndex(array) {
    return array.filter((x,i) => x % i == 0)
}