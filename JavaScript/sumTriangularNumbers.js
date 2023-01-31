/* Instructions

Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.

*/

/*
Parameters: integer
Returns: integer ; sum of triangular numbers
Examples: sum(-1) -> 0
          sum(0) -> 0 (n = 0)
          sum(1) -> 1 (n = 1)
          sum(2) -> 1 + 3 = 4 (n = 2)
          sum(3) -> 1 + 3 + 6 = 10 (n = 3)
          sum(4) -> 1 + 3 + 6 + 10 = 20 (n = 4)
          sum(5) -> 1 + 3 + 6 + 10 + 15 = 35 (n = 5)
Pseudocode:
// triangular numbers = 1, 3(+2),6(+3),10(+4),15(+5),21(+6)
//                  n = 1, 2,    3,    4,     5,     6
// let sum = 0
 for (let i = 1, t = 0; i <= n; i++){
  t += i
  sum += t
 }
 return sum
}

*/

function sumTriangularNumbers(n) {
    let sum = 0
    for (let i = 1, t = 0; i <= n; i++){
      t += i
      sum += t
    }
   return sum
  }