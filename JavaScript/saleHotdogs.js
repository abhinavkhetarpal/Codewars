/* Instructions

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90

*/

/*
Parameters: n - number of hotdogs a customer will buy
Returns: cost - how much money in cents (number) a customer spends to buy n hotdogs
Examples: saleHotDogs(1) -> 100
          saleHotDogs(5) -> 95*5 = 475
          saleHotDogs(10) -> 90*10 = 900
Pseudocode: 
  // if n < 5 return n * 100
  // else if n < 10 return n * 95
  // else return n * 90
*/

function saleHotdogs(n){
    return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
}

// Refactored

function saleHotdogs(n){
    return n * (n < 5 ? 100 : n < 10 ? 95 : 90)
}
