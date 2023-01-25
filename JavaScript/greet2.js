/* Instructions

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

*/

/* 
Parameters: string
Returns: string
Examples: greet("jack") -> "Hello Jack!"
          greet("ABHINAV") -> "Hello Abhinav!"
Pseudocode:
  // return 'Hello' + ' ' + string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase() + '!'
*/

var greet = function(name) {
  return 'Hello' + ' ' + name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase() + '!'
};