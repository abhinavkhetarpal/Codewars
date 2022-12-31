/* Instructions

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

*/

/*
Parameters: string, all lowercase, non-empty
Returns: number
Examples: wordsToMarks("attitude") -> 100
          wordsToMarks("love") -> 54
Pseudocode:
  // convert string to array 
  // map array and return ascii value -96 for each character
  // use reduce to sum all ascii values and return a number
*/

function wordsToMarks(string){
    let arr = string.split("")
    return arr.map((x,i) => string.charCodeAt(i) - 96).reduce((a,b) => a+b)
  }

// Refactored

const wordsToMarks = string => [...string].reduce((res,_,i) => res + string.charCodeAt(i) - 96, 0)

// Alternative

const wordsToMarks = string => [...string].reduce((res, c) => res += c.charCodeAt() - 96, 0)
