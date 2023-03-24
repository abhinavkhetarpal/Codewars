/* Instructions

Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!

*/

/*
Parameters: array of integers >= 0 (possible duplicates)
Returns: 
Examples: nextId([0,1,2,3,5]) -> 4
          nextId([0,1,2,3,4,5,6,7,8,9,10]) -> 11
          nextId([1,2,0,2,3,5]) -> 4
          nextId([1,2,3,4]) -> 0
Pseudocode:
// nextId([1,2,0,2,3,5]) -> [0,1,2,3,5] -> 4

// make a shallow copy of ids array and store in idsCopy variable
// remove duplicates from idsCopy & sort idsCopy in ascending order
// if it exists find the first non-consecutive id and return it + 1
// else if idsCopy does not include 0 return 0
// else return the last element of the idsCopy + 1

*/

function nextId(ids){
    let idsCopy = ids.slice()
    idsCopy = idsCopy.filter((x,i) => idsCopy.indexOf(x) == i).sort((a,b) => a-b)
    let result = idsCopy.find((x,i, arr) => i < arr.length - 1 ? arr[i+1] != x + 1 : x)
    if (!idsCopy.includes(0)) return 0
    return result + 1    
}

// Refactored

function nextId(ids){
    let x = 0
    while (ids.includes(x)) x++
    return x
}

// Alternative Solution

function nextId(ids){
    let used = new Set(ids)
    for (let i = 0; i <= ids.length; i++){
        if (!used.has(i)) return i
    }
}
// Alternative Solution

function nextId(ids){
    for (let i = 0; i < ids.length; i++){
        if (ids.indexOf(i) == -1) return i
    }
    return ids.length
}
