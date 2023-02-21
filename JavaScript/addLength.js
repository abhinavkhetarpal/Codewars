/* Instructions

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

*/

/*
Parameters: space separated string of words ; string.length >= 1
Returns: array of strings consisting of original words + space character + word length
Examples: addLength("apple banana") -> ["apple 5", "banana 6"]
          addLength("you will win") -> "you 3", "will 4", "win 3"]
Pseudocode:
  // convert input string to array by splitting it by the space character and store the result in a variable
  // use map method on the array to return the string at each index concatenated with a space character & the length of the string
  // return mapped array
*/

function addLength(str) {
    return str.split(" ").map(x => x + ' ' + x.length)
  }