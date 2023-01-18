/* Instructions

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words.

*/

/*
Parameters: string
Returns: array of strings
Examples: 
Pseudocode:
// if text is empty return []
// convert the string to an array separated by the space character
// use map to check if a string includes a comma or a period or a :
  // if it does then slice(0,-1)
  // else if includes "-" then split the string by the "-" and concat the result to the array
  // else return the string
// use map to convert all words to lowercase
// use reduce method to count the instances of each word and store this in an object
e.g. // {"hello": 3, "bye" : 4, "no":3 , "yes" : 7}
// declare an empty array and push the key & value of the object as an array to that array
// sort the array by the value e.g. b[1] - a[1]
// if size of object is >= 3
  // return [array[0][0],array[1][0],array[2][0]]
// else if size of object == 2
  // return [array[0][0],array[1][0]]
else if size of object == 1
  return [array[0][0]]

*/

function topThreeWords(text) {
    if (text.length == 0) return []
    let arr = text.split(" ")
    arr = arr.map(x => x.includes(",") || x.includes(".") || x.includes(":") ? x.slice(0,-1) : x.includes("-") ? arr.concat(x.split("-")) : x.startsWith("//") ? x.slice(2) : x)
    arr = arr.filter(x => x!= "" && x!=".." && x!="..." && x!="." && x!=`\'`).map(x => x.toString().toLowerCase())
    let count = arr.reduce((a,b) => {
      if (!a[b]){
        a[b] = 0
      }
      a[b]++
      return a
    }, {})
    let sorted = []
    for (elem in count){
      sorted.push([elem,count[elem]])
    }
    sorted.sort((a,b) => b[1] - a[1])
    if (sorted.length >= 3) return [sorted[0][0],sorted[1][0],sorted[2][0]] 
    if (sorted.length == 2) return [sorted[0][0],sorted[1][0]] 
    if (sorted.length == 1) return [sorted[0][0]] 
    else return []
  }
