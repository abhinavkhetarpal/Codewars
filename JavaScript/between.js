/* Instructions

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

a = -2
b = 2
--> [-2,-1,0,-1,2]

*/

function between(a,b) {
    return Array.from({length: (b-a) + 1}, (_,i) => a + i)
  }

// Refactored

function between (a,b){
    return Array.from({length: b - a + 1}, () => a++)
}
