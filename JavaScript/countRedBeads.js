/* Instructions

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

B R R B R R B R R B R R B R R B

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.

*/

/*
Parameters: integer n ; number of blue beads
Returns: integer ; number of red beads
Examples: countRedBeads(0) -> 0 
          countRedBeads(1) -> 0
          countRedBeads(2) -> 2 // n
          countRedBeads(3) -> 4 // n + 1 // n + (n-2)
          countRedBeads(4) -> 6 // n + 2 // n + (n-2)
          countRedBeads(5) -> 8 // n + 3 // n + (n -2)
          countRedBeads(6) -> 10 // n + 4 // n + (n-2)
Pseudocode:
  // if (n <2) return 0
  // else
    // return 2 n - 2
*/

function countRedBeads(n) {
    return n < 2 ? 0 : 2*n - 2 
  }