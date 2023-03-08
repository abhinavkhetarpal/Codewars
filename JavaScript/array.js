/* Instructions

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

*/

/*
Parameters: comma separated string
Returns: space separated string with first and last items of original string removed
Examples: array("") -> null
          array("1") -> null
          array("1,2") -> null
          array("1,2,3") -> "2"
          array("1,2,3,4") -> "2 3"
          array("1,2,3,4,5") -> "2 3 4"
Pseudocode:
  // convert string to array (split string by comma character)
  // if array length is < 3 return null
  // else slice array from index 1 to index - 1 
  // convert array to string (joined by space character) and return this array
*/

function array(arr){
    let a = arr.split(",")
    if (a.length < 3) return null
    else return a.slice(1,-1).join(" ")
}

