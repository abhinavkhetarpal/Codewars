/* Instructions

*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

*/

/*
P: array of strings or numbers, value (string or number)
R: return true/false
E: check([1,2,3],1) -> true
   check(['1'],'1') -> true
   check(['1'],1) -> false
   check([1],'1') -> false
P:
  return a.includes(x)
*/

function check(a,x){
    return a.includes(x)
}

// Alternative solution using arrow function

const check = (a,x) => a.includes(x)

// Another alternative solution

const check = (a,x) => a.indexOf(x) >= 0