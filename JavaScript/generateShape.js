/* Instructions

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

/* 
Parameters: integer between 1 and 50
Returns: string
Examples: generateShape(1) -> '+'
          generateShape(2) -> '++
                               ++'
*/

function generateShape(integer){
    return Array.from({length:integer}, (x,i) => '+'.repeat(integer)).join("\n")
  }