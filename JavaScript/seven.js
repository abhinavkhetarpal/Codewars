/* Instructions

A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.

Examples:
1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.

The number of steps to get the result is 1.

2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.

3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.

4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101. The number of steps is 7.

Task:
Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.

Forth Note:
Return on the stack number-of-steps, last-number-m-with-at-most-2-digits 

Examples:
seven(371) should return [35, 1]
seven(1603) should return [7, 2]
seven(477557101) should return [28, 7]

*/

/*
Parameters: number > 0
Returns: array of numbers [last number m with at most 2 digits, number of steps]
Examples: seven(371) -> x = 37 y = 1 ; 37 - 2 * 1 = 35 ; 35 % 7 is 0 ; [35,1]
          seven(1603) -> x = 160 y = 3; 160 - 2*3 = 154; x = 15 y = 4; 15 - 2*4 = 7; 7 % 7 is 0; [7,2]
          seven(372) -> x = 37 y = 2; 37 - 4 = 33; 33 mod 7 != 0; [33,1]
Pseudocode: working theory (we don't care if last 2 digits are divisble by 7)
// count = 1
  // while (String(m).length > 2)
    // y = m % 10
    // x = (m - y)/10
    // m = x - 2*y
    // if (String(m).length <= 2) return [m,count]
    // else count ++
// if input.length <= 2 return [input,0]

Examples:    
while ('371'.length >2 ){
 y = 1
 x = 37
 m = 35
 if ('35'.length <= 2) return [35,1]
 
while ('1603'.length > 2){
 y = 3
 x = 160
 m = 154
 count = 2, iteration# 2 now
 y = 4
 x = 15
 m = 7
 if ('7'.length <= 2) return [7,2]
}
}

*/

function seven(m) {
    let count = 1
    while (String(m).length > 2){
      let y = m % 10
      let x = (m - y) / 10
      m = x - 2*y
      if (String(m).length <= 2) return [m,count]
      else count++
    }
    return [m,0] // if input m has 2 digits or less
  }

// Refactored

function seven(m) {
    let count = 0
    while (String(m).length > 2){
      m = Math.floor(m/10) - (m%10)*2
      count++
    }
    return [m,count] 
  }