function getRealFloor(n) {
    if (n <= 0 ){return n}
    else if (n < 14) {return n-1}
    else{ return n-2}
  }

// Refactored for readability

const getRealFloor = n => {
    if(n >= 13) return n - 2
    if(n > 0) return n - 1
    return n
  }