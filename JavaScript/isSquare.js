var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
  }

// Refactored to make solution language agnostic

function isSquare(n){
    return Math.sqrt(n) % 1 === 0;
}