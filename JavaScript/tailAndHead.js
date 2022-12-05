/*
Instructions

Coding in function tailAndHead. function accept 1 parameter arr(a number array).

We use an example to explain this task:

You got an array [123,456,789,12,34,56,78].

First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:

[123,456,789,1 2,3 4,5 6,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
And then, Calculate their product and return it(7x13x10x5x9x13=532350)

So, tailAndHead([123,456,789,12,34,56,78]) should return 532350 

All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use reduce() solve this kata.

Examples
tailAndHead([1,2,3,4,5]) should return 945
tailAndHead([111,2345,66,78,900]) should return 7293
tailAndHead([35456,782,569,2454,875]) should return 12012

*/

function tailAndHead(arr){
    let numArray2D = arr.map(x => String(x).split("").map(x => Number(x)))
    return numArray2D.reduce((a,b,i,arr) => i == arr.length - 1 ? a.concat() : a.concat(b[b.length-1] + arr[i+1][0]),[]).
    reduce((a,b) => a*b)
  }

// Solution with comments

function tailAndHead(arr){
    let numArray2D = arr.map(x => String(x).split("").map(x => Number(x))) // [111,2345,66,78,900] -> [['1','1','1'],['2','3','4','5'],['6','6'],['7','8'],['9','0',0']] -> [[1,1,1],[2,3,4,5],[6,6,],[7,8],[9,0,0]]
    
    return numArray2D.reduce((a,b,i,arr) => i == arr.length - 1 ? a.concat() : a.concat(b[b.length-1] + arr[i+1][0]),[]). // add tail of first element to head of next element until you reach the last element of the array (i == arr.length -1), after which we need to stop as 'i' will be undefined in the next iteration

    reduce((a,b) => a*b) // calculate the product of the array we generated 
  }