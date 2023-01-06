/* Instructions
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

/* 
Parameters: string
Returns: string
Examples: alternateCase("Hello World") -> ("hELLO wORLD")
Pseudocode:
  // convert string into array
  // use map on array, if a character is uppercase, return lowercase version of it, and vice versa
  // convert array back to string and return string
*/

function alternateCase(s) {
    return s.split("").map(x => x == x.toUpperCase()? x.toLowerCase() : x.toUpperCase()).join("")
  }