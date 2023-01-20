/* Instructions

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

*/

/* Solution
Parameters: positive integer
Returns: number
Examples: digits(5) -> 1
          digits(12345) -> 5
Pseudocode:
  // conver number to string
  // convert string to array
  // calculate length of array
  // return length of array
*/

function digits(n) {
    return String(n).split("").length
  }

// refactored

function digits(n){
    return String(n).length
}