/* Instructions

Remove all exclamation marks from the end of sentence.

*/

/*

P: string 
R: remove all "!" the end of the string & return the new string
E:  remove("Hi!") -> "Hi"
    remove("Hi!!!") ->"Hi"
    remove("!Hi") -> "!Hi"
    remove("!Hi!") -> "!Hi"
    remove("Hi! Hi!") ->"Hi Hi"
    remove("Hi") -> "Hi"
P: 
  while (string.endsWith("!")){
    string = string.slice(0,-1)
  }
  return string

*/

function remove (string) {  
    while (string.endsWith("!")){
      string = string.slice(0,-1)
    }
    return string
}

function remove(s){
    for (var i = 0; s.endsWith("!"); i++) {
        s = s.slice(0 , -1) 
    }	
    return s
  }