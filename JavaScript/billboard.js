/* Instructions

You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

*/

/*
P: name (string), price per character(number)
R: total price (number)
E: billboard("Jeong-Ho Aristotelis") -> 20 * 30 = 600
P:
*/

function billboard(name, price = 30){
    let letter = 0, totalCost = 0
    while (letter < name.length){
      letter++
      totalCost+= price
    }
    return totalCost
}

// For loop

function billboard(name, price = 30){
    let totalCost = 0
    for (let i = 0; i < name.length; i++){
        totalCost += price
    }
    return totalCost
}

// Using reduce

function billboard(name, price = 30){
    return name.split("").reduce((sum,letter) => sum + price, 0)
}

// Using math

function billboard(name, price = 30){
    return name.length / (1 / price)
}