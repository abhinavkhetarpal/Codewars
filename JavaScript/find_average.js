function findAverage(array) {
    return array.reduce((a,b) => a+b,0)/array.length || 0
  }

// Refactored for readability

function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}