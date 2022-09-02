function parseF(s) {
    if (parseFloat(s) || parseFloat(s) == 0) return parseFloat(s)
    return null
  }

// Refactored

function parseF(s){
    return isNaN(parseFloat(s)) ? null : parseFloat(s)
}