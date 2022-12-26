/* Instructions

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

*/

/*
Parameters: array of positive integers
Returns: smallest possible number that can be formed; one number cannot be used twice; must use all numbers
Examples: minValue([1,3,1]) -> 13
          minValue([5,7,5,9,7]) -> 579
          minValue([1,9,3,1,7,4,6,6,7]) -> 134679
Pseudocode:
// remove duplicates from array of + ints (filter method)
// sort array in ascending order (sort method)
// convert array to string
// convert string to num
// return num
*/

function minValue(values){
    let noDuplicates = [...values].filter((x,i) => [...values].indexOf(x) == i)
    let sortedAsc = noDuplicates.sort((a,b) => a-b)
    let str = sortedAsc.join("")
    return Number(str)
  }

// Reformatted

function minValue(values){
    const str = [...values]
        .filter((x,i) => [...values].indexOf(x) == i)
        .sort((a,b) => a-b)
        .join("")
    return Number(str)
  }
