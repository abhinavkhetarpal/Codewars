/* Instructions

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

*/

/*
Parameters: quantity of mangoes (integer) ; price per mango (integer)
Returns: total cost of mangoes (integer) ; for every 2 mangoes, the 3rd is free
Examples: mango(0,3) => 0
          mango(1,3) => 3
          mango(2,3) => 6
          mango(3,3) => 6 (1 free)
          mango(4,3) => 9 (1 free)
          mango(5,3) => 12 (1 free)
          mango(6,3) => 12 (2 free)
Pseudocode:
  return (quantity - Math.floor(quantity/3)) * price
*/

function mango(quantity, price){
    return price * (quantity - Math.floor(quantity/3))
  }