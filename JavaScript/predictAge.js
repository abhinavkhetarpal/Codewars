/* Instructions

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

*/

/* 
Parameters: positive numbers
Returns: number rounded down to the nearest integer
Examples: predictAge(65,60,75,55,60,63,64,45) -> (4225 + 3600 + 5625 + 3025 + 3600 + 3969 + 4096 + 2025) = 30,165 -> sqrt -> 173.68 -> divide 2 -> 86.84 -> 86 
Pseudocode: 
    // put each age in an array and use map to square each age
    // use reduce to sum the previous array
    // sqrt the reduce value, divide it by 2, and Math.floor() the result
*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const squareAges = [age1,age2,age3,age4,age5,age6,age7,age8].map(x => x**2)
    const sumAges = squareAges.reduce((a,b) => a+b)
    return Math.floor(Math.sqrt(sumAges) / 2)
  }

// Refactored

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const sum = [...arguments]
            .map(x => x**2)
            .reduce((a,b) => a+b)
    return Math.floor(Math.sqrt(sum)/2)
}