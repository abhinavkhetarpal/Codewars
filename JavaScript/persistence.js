/* Instructions

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

/* PREP

Parameters: one positive integer 
Returns: one integer
Examples: persistence(39) -> 3 * 9 = 27 ; 2 * 7 = 14 ; 1 * 4 = 4 ; 3
          persistence(999) ->9*9*9=729;7*2*9=126;1*2*6=12;1*2= 2; 4
          persistence(4) -> 0 
Pseudocode:
// store integer in a variable
// convert integer to string
// convert string to array
// convert array of strings to array of nums
// if prodNumsArray length is 1 return
// reduce array of nums into array that contains product of nums
// if prodNumsArray length is 1 return
// if not then continue reducing
// count number of reduces it takes until prodNumsArray length is 1

*/


function persistence(num) {
    const str = String(num)
    let arrOfNums = str.split("").map(x => Number(x)) // 39 -> [3,9]
    let count = 0
    while (arrOfNums.length > 1){
      arrOfNums = arrOfNums.reduce((a,b) => a*b) // reduce array to number ([3,9] -> 3*9 -> 27)
      arrOfNums = String(arrOfNums).split("").map(x => Number(x)) // convert number to array (e.g. 27 -> [2,7])
      count++
    }
   return count   
 }

 // Refactored (more efficient)

 function persistence(num){
    let str = String(num)
    let count = 0
    while (str.length > 1){
        str = str.split("").map(x => Number(x)).reduce((a,b) => a*b).toString() // conver string to array, reduce array to number,convert number to string
        count++
    }
    return count
 }