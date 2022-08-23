function sumMul(n,m){
    let counter = 0
    if (n < m){
        for (let i = 1, j = Math.floor(m/n); i <=j; i++){
          counter += n*i
          console.log(counter)
        }
        return counter
      }
    return "INVALID"
  }

  // Refactored

  function sumMul(n,m){
    if (n >= m) return "INVALID"
    
    let sum = 0
    for (let i = n; i < m; i+=n){
        sum+= i
    }
    return sum
  }