/* Instructions

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.

*/

/*
Parameters: array of positive integers, minimum size of array = 1
Returns: array consisting of two integers >= 0
Examples: rowWeights([100]) -> [100,0]
          rowWeights([1,100]) -> [1,100]
          rowWeights([100,10,50,30]) -> [150,40]
          rowWeights([10,20,30]) -> [40,20]
Pseudocode: 
  // if the index is even (index % 2 == 0) add the element at the index to team 1 variable
  // if the index is odd (index % 2 == 1) add the element to team2 variable
  // return [team1,team2]
*/

function rowWeights(array){
    let team1 = 0, team2 = 0
    array.forEach((x,i) => i % 2 == 0 ? team1 += x : team2 += x)
    return [team1,team2]
}

// Refactored using comma operator

function rowWeights(array){
    return array.reduce((a,b,i) => (a[i%2] += b,a) , [0,0])
}