/* Instructions

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)   should return 1 
to_binary(5)   should return 101 
to_binary(11)  should return 1011 

*/

/*
Parameters: integer >= 0
Returns: integer in binary format
Examples: toBinary(1) -> 1
          toBinary(5) -> 101
          toBinary(11) -> 1011
Pseudocode:
  // convert n to string with radix 2
  // convert n to integer and return
*/

function toBinary(n){
    return Number((n).toString(2))
  }