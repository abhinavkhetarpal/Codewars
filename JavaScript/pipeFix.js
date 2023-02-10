/* Instructions

Issue
    Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

    The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

    Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
    Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
    Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

*/

/*
Parameters: array of numbers
Returns: array of numbers where each consecutive number is 1 greater than the previous
Examples: pipeFix([1,3,5,6,7,8]) -> [1,2,3,4,5,6,7,8]
          pipeFix([1,2,3,12]) -> [1,2,3,4,5,6,7,8,9,10,11,12]
          pipeFix([6,9]) -> [6,7,8,9]
          pipeFix([-1,4]) -> [-1,0,1,2,3,4]
          pipeFix([1,2,3]) -> [1,2,3]
Pseudocode:
  use reduce method to iterate over each element of copy of n array
    if element at index i+1 == element at index i + 1 OR element at index i is the last element of the array
     concat element at index i
    else while element at index i < element at index i+1
      concat element at index i + 1   
Pseudocode #2:
 generate an array with enough space to contain each consecutive number from the smallest number of n up to the largest (e.g. [-1,4]) requires 6 indexes ([-1,0,1,2,3,4])
 fill the array with the value of the first element of n (the smallest number)
 map the array to add the current index to the value of each element (to create the ascending order of numbers)
*/

function pipeFix(n){
    return Array(n[n.length-1]-n[0]+1).fill(n[0]).map((x,i) => x + i)
  }