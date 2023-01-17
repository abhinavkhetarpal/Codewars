/*                  Instructions
My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
*/

/*                  Solution
Parameters: number (card price), number (ticket price), number (percentage [no need to convert])
Returns: number (indicating # of times John must go to cinema so that card price < ticket price)
Examples: movie(500,15,0.9) -> 15x : 500 + 15*(0.9) + (15*0.9*0.9) + (15*0.9*0.9*0.9)                            -
Pseudocode:
  // each time John goes to the cinema, I need to calculate how much the ticket price increases with System A and System B
  // on the first visit
     sysB = card + ticket*perc
     sysA = ticket
     visits = 1
   while (Math.ceil(sysB) >= sysA){
      visits += 1
      sysB += ticket * Math.pow(perc,visits)
      sysA += ticket
  }
  // return number of visits  
*/
function movie(card, ticket, perc) {
    let sysA = ticket
    let sysB = card + ticket*perc
    let visits = 1
    while (Math.ceil(sysB) >= sysA){
      visits += 1
      sysA += ticket
      sysB += ticket * Math.pow(perc,visits)
    }
    return visits
  };

  // Refactored

  function movie(card, ticket, perc){
    let sysA = visits = 0
    let sysB = card
    while (Math.ceil(sysB) >= sysA){
        sysA += ticket
        sysB += ticket * Math.pow(perc,++visits)
    }
    return visits
  }
  
