/* Instrutions

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

*/

/* 
Parameters: string
Returns: string
Examples: shortcut("hello") -> "hll"
          shortcut("codewars") -> "cdwrs"
          shortcut("goodbye") -> "gdby"
          shortcut("HELLO") -> "HELLO"
Pseudocode:
  // convert string to array
  // loop through each element
          // if the element is a vowel return an empty string
          // else return the letter
  // convert the array to string and return it

*/

function shortcut (string) {
    return string.split("").map(x => "aeiou".includes(x) ? "" : x).join("")
  }
