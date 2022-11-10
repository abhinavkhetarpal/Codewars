function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq)+1,2) : -1; 
}

// Refactored

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
  }