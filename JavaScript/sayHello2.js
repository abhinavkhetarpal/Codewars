/* Instructions

Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

*/

/*
Parameters: name - array with 1 or more values, join together with one space in between each value
Returns: welcome greeting string
Examples: sayHello(['John', 'Smith'],'Phoenix','Arizona') -> 'Hello, John Smith! Welcome to Phoenix, Arizona!'
Pseudocode:
  use template string & join array 
*/

function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}