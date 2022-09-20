function SeriesSum(n)
{
  let sum = 1
  for (let i = 2, k = 0 ; i <=n; i++,k++){
    sum += (1/(4 + 3*k))
  }
  if (n == 0) return (0).toFixed(2)
  return sum.toFixed(2)
}

// Refactored

function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }