/* Instructions

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/

/*
Parameters: string
Returns: string
Examples: nameShuffler("john McClane") -> "McClane john"
          nameShuffler("Mary jeggins") -> "jeggins Mary"
          nameShuffler("tom jerry") -> "jerry tom"
Pseudocode:
  // convert str to array, split by " "
  // reverse array
  // join array by " " and return str  
*/

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
  }