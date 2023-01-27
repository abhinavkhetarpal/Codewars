/* Instructions

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

/*

/* Solution

Parameters: two positive integers
Returns: integer that is the greatest common divisor
Examples: mygcd(1,2) -> 1 // if one of the integers is one the gcd is 1
          mygcd(8,9) -> 1
Pseudocode:
// store the two numbers in an array
// start a for loop that is initialized (i) with the largest of the 2 nums
// decrement down to 1
// on each iteration of the loop, check if both numbers are divisible by i without remainder (%)
  // return i if yes
*/

function mygcd(x,y){
    let ints = [x,y]
    for (let i = Math.max(...ints); i >= 1 ; i--){
      if (ints[0]%i == 0 && ints[1]%i == 0) return i
    }
  }

// Refactored

function mygcd(x,y){
    for (let i = Math.max(x,y); i >= 1; i--){
        if (x % i == 0 && y % i == 0) return i
    }
}

// Refactored again

function mygcd(x,y){
    let R
    while ((x%y >0)){
        R = x % y
        x = y
        y = R
    }
    return y
}

