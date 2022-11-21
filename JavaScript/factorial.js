function factorial(n)
{
  if (n < 0 || n > 12) throw new RangeError("The input must be between 0 and 12.")
  
  let result = 1
  for (let i = n; i > 0; i--){
    result *= i
  }
  return result
}

// Refactored using recursion

function factorial(n){
    if (n < 0 || n > 12) throw new RangeError()

    return n <= 1 ? 1 : n * factorial(n - 1)
}

/*
    factorial(5) --> 5 * factorial(4)
    factorial(4) --> 5 * 4 * factorial(3)
    factorial(3) --> 5 * 4 * 3 factorial(2)
    factorial(2) --> 5 * 4 * 3 * 2 factorial(1)
    factorial(1) --> 5 * 4 * 3 * 2 * 1 = 120
*/