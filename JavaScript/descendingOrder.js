function descendingOrder(n){
    return Number(String(n).split("").map(x => Number(x)).sort((a,b) => b-a).join(""))
  }

// Refactored 

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// Refactored again

function descendingOrder(n){
    return parseInt(String(n).split('').sort((a,b) => b-a).join(''))
}