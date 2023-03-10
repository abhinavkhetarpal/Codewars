/* Instructions

Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

*/

/*
Parameters: integer (either a square number or not)
Returns: nearest square number (integer) 
Examples: nearestSq(100) -> 100 (10^2)
          nearestSq(111) -> 121 (11^2)
Pseudocode:
  if n % Math.sqrt(n) == 0 return n
  else return Math.round(Math.sqrt(n))**2
*/

function nearestSq(n){
    if (n % Math.sqrt(n) === 0) return n
    else return Math.round(Math.sqrt(n))**2
}

