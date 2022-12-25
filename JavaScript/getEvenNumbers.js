/* Instructions

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

*/

/*
Parameters: array
Returns: array
Examples: getEvenNumbers([2,4,5,6]) -> [2,4,6]
Pseudocode
//loop through array
//filter for all even numbers, x % 2 == 0
//return array
*/

function getEvenNumbers(numbersArray){
    return numbersArray.filter(x => x % 2 == 0)
  }