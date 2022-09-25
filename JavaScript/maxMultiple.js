// First attempt

function maxMultiple(divisor, bound){
    let multiples = []
    for (let i = divisor; i <= bound; i+= divisor){
      if (i%divisor == 0){
        multiples.push(i)
      }
    }
    return Math.max(...multiples)
  }

// Refactored

function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
  }