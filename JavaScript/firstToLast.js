function firstToLast(str,c){
    if (str.search(c)==-1) return -1
    return str.lastIndexOf(c) - str.indexOf(c)  
  }

// Refactored solution

function firstToLast(str,c){
    return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}