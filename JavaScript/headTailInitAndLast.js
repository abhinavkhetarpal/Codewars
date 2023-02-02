/* Instructions

Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! 

*/

/*
Parameters: arrays
Returns: depends on function
Examples: head([1,2,3]) -> 1
          last([1,2,3]) -> 3
          init([1,2,3]) -> [1,2]
          tail([1,2,3]) -> [2,3]
Pseudocode:
  // function head { return array[0] }
  // function last { return array[array.length-1] }
  // function init { array.slice(0, array.length-1) }
  // function tail { array.slice(1) }
  // 
*/

function head(array) { return array[0] }
function last(array) { return array[array.length - 1] }
function init(array) { return array.slice(0, array.length-1) }
function tail(array) { return array.slice(1) }
