function smallEnough(a, limit){
  return a.every(x => x <= limit)
}

// Alternate Solution

function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }