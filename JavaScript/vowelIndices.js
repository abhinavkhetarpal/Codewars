/* Instructions

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES

*/

/* 
Parameters: string
Returns: array
Examples: vowelIndices("Mmmm") -> []
          vowelIndices("Super")-> [2,4]
          vowelIndices("Apple")-> [1,5]
          vowelIndices("YoMama")->[1,2,4,6]
Pseudocode:
 // convert string to array and store the result in a variable
 // loop through array and return a new array consisting of (index+1) if a character is a vowel, otherwise the character itself
 // filter the new array to return only the elements that are of number type
 // return the filtered array 
*/

function vowelIndices(word){
    let arr = word.split("")
    return arr.map((x,i) => "aeiouy".includes(x.toLowerCase()) ? i+1 : x).filter(x => typeof x === "number")
  }
