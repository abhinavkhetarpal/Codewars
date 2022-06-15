function colorOf(r,g,b){
    //   return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
      r =  r.toString(16).padStart(2,'0')
      g =  g.toString(16).padStart(2,'0')
      b =  b.toString(16).padStart(2,'0')
      return `#${r}${g}${b}`
    }
    
// Refactored Solution

function colorOf(r,g,b){
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
  }

// Refactored Solution #2

function colorOf(r,g,b){
    return '#' + toHex(r) + toHex(g) + toHex(b)
  }
  
  function toHex(n){
    let result = n.toString(16)
    return result.padStart(2,'0')
  }
  
