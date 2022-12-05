/*
Instructions

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/

function createPhoneNumber(n){
    n = n.join("")
    return `(${n.slice(0,3)}) ${n.slice(3,6)}-${n.slice(6)}`
  }


// Refactored 

  function createPhoneNumber(n){
    let format = "(xxx) xxx-xxxx"
    for (let i = 0; i < n.length; i++){
        format.replace('x',n[i])
    }
    return format
  }

  // Refactored again

  function createPhoneNumber(n){
    return n.reduce((p,c) => p.replace('x',c),"(xxx) xxx-xxxx")
  }
