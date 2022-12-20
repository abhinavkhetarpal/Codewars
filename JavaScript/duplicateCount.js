/* Instructions

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

/*

Parameters: string
Returns: num (int)
Examples: duplicateCount('abcde') -> 0
          duplicateCount('ABBA') -> 2
          duplicateCount('aabBcde') -> 2
Pseudocode:
// convert string to lowercase then convert to array
// calculate instances of each character and store in an object
// loop through object and count the number of properties whose values are > 1
// return count

*/

function duplicateCount(text){
  const arr = text.toLowerCase().split("")
  const obj = arr.reduce((a,b) => {
    if (!a[b]){
      a[b]=0
    }
    a[b]++
    return a
  } ,{})
//   let count = 0
//   for (prop in obj){
//     if (obj[prop] > 1) count++
//   }
//   return count 
  return Object.keys(obj).filter(x => obj[x] > 1).length
}
