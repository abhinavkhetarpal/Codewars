/* Instructions

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

/*
Parameters: string
Returns: array
Examples: orderedCount("abracadabra") -> [['a',5],['b',2]...]
Pseudocode: 
  // convert string to array
  // loop through the array
  // add each character of the string to a Map
  // if the character already exists within the Map, increase its count
  // return the properties of the Map in array format
*/

const orderedCount = function (text) {
    const arr = text.split("")
    const res = arr.reduce((m,x) => {
      if (!m.has(x)){
        m.set(x,0) 
      }
      m.set(x,m.get(x) + 1)
      return m
    } ,new Map())
    return Array.from(res)
  }

// Refactored using ternary operator

const orderedCount = function (text) {
    return Array.from(text.split("").reduce((m,x) => m.set(x, m.has(x) ? m.get(x) + 1 : 1),new Map()))
  }