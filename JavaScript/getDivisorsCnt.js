function getDivisorsCnt(n){
    let count = 0
    let div = 1
    while (div <= n){
      if (n%div == 0) count ++
      div++
    }
  return count
}

// Refactored

function getDivisorsCnt(n){
    for (let count = 0, i = n; i > 0; i--){
        if (n%i == 0) count ++
    }
    return count
}