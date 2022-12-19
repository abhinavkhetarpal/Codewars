/* Instructions

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

/*

Parameters: 2 arrays of values, array b can have more than 1 element, the values of array b can be placed throughout array a (non-consecutive) 
Returns: 1st array mutated
Examples: arrayDiff([1,2],[1]) -> [2]
          arrayDiff([1,2,2,2,3],[2]) -> [1,3]
          arrayDiff([1,2,3],[1,2]) -> [3]
          arrayDiff([12,-20,-17,17,-8,-7,-8,5,-12,-2,-6,20,19,2,5,7,16],[12,-20,-17,17,-8,-7,-8,5]) -> [ -12, -2, -6, 20, 19, 2, 7, 16 ]
Pseudocode:
// loop through a
// if an element of a exists in b, remove it
// return a


*/

function array_diff(a, b) {
    return a.filter(e => !b.includes(e)); // Filter out all the elements of a that are included in b
  }


// Alternative Solution

function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; }); // Keep only the elements of a that are not in b
  }