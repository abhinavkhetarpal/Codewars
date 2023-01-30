/* Instructions

Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

*/

/*
Parameters: array of strings
Returns: sorted array of strings
Example: sortme(["one","two","three"]) -> ["one","three","two"]
Pseudocode: 
  // make shallow copy of array, sort the array, return sorted array 
*/

sortme = function( names ){
    return names.slice().sort()
}


