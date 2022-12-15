/* Instructions

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

/* P.R.E.P

1. Parameters -> array of strings
2. Returns-> string
3. Examples: twoSort(arr1) -> b***i***t***c***o***i***n
             twoSort(arr2) -> a***r***e
4. Pseudocode: 

1. create shallow copy of array
2. sort array alphabetically
3. extract first word
4. add *** between each character of word
5. return modified word as string

*/

function twoSort(s) {
  let sorted = [...s].sort()
  let firstWord = sorted[0]
  let result = [...firstWord].reduce((a,b,i,arr) => i != arr.length -1 ? a.concat(`${b}***`) : a.concat(b),[])
  return result.join("")
}

// Alternative Solution

function twoSort(s){
    let word = [...s].sort()[0]
    return word.split("").join("***")
}


