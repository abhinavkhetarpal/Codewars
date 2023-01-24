/* Instructions

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

/*
Parameters: array of integers
Returns: string
Examples: isSortedAndHow([1,2,3]) -> "yes, ascending"
          isSortedAndHow([3,2,1]) -> "yes, descending"
          isSortedAndHow([1,4,3]) -> "no"
Pseudocode:
// make copy of original array and store in a variable, sort copy in ascending order
// check if string version of copy is equal to string version of array
// if yes return "yes, ascending"
// else check if string copy sorted in descending order is equal to string version of array
// if yes return "yes, descending"
// else return "no"
*/

function isSortedAndHow(array) {
    let copy = array.slice().sort((a, b) => a - b)
    return copy.join("") == array.join("") ? "yes, ascending" :
       copy.sort((a, b) => b - a).join("") == array.join("") ? "yes, descending" :
       "no"
 }