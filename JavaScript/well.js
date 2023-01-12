/* Instructions

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

/*
Parameters: array of strings 'good' & 'bad'
Returns: string 'Publish' or string 'Fail' or 'I smell a series!'
Examples: well(['bad','bad','bad']) -> 'Fail'
          well(['good',bad,bad,bad]) -> 'Publish'
          well([good,bad,bad,bad,bad,good,bad,bad,good]) -> 'I smell a series!'
Pseudocode:
  // calculate # of occurrences of string 'good' in input array and store in a variable
  // if numGood == 0 return 'Fail'
  // else if numGood > 2 return 'I smell a series!'
  // else return 'Publish!'
*/

function well(x){
    let numGood = x.filter(el => el == 'good').length
    return numGood == 0 ? 'Fail!' : numGood > 2 ? 'I smell a series!' : 'Publish!'
  }
  