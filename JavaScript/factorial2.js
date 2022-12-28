/* Instructions

Your task is to write function factorial.

*/

/* 
Parameters: positive integer
Returns: positive integer
Examples:   factorial(0) -> 1
            factorial(1) -> 1
            factorial(2) -> 2
            factorial(3) -> 6
            factorial(4) -> 24 
Pseudocode:
    // set answer variable = 1
    // while (n > 1) multiply answer by n and decrement n by 1 each time
    // return answer

*/

// Non-recursive solution

function factorial(n){
    let answer = 1
    while (n > 1){
        answer *= n
        n--
    }
    return answer
}

// Recursive solution

function factorial(n){
    if (n == 0) return 1
    else return n * factorial(n-1)
  }
