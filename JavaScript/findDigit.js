/* Instructions

Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

*/

/*
Parameters: number, number 
Returns: number
Examples: findDigit(5673,4) -> 5
          findDigit(129,2) -> 2
          findDigit(-2825,3) -> 8
          findDigit(-456,4) -> 0
          findDigit(0,20) -> 0
          findDigit(65,0) -> -1
          findDigit(24,-8) -> -1
Pseudocode:
// convert num to absolute value of num
// convert num to string then to array of nums
// if nth is <= 0 return -1
// else return array[array.length-nth] || 0
*/

var findDigit = function(num, nth){
    const arr = Array.from(String(Math.abs(num)),Number)
    return nth <= 0 ? -1 : arr[arr.length - nth] || 0
}