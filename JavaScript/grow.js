function grow(x){
    return x.reduce((acc,e) => acc * e, 1)
  }

  // Refactored

  const grow = x => (x.reduce((a,b) => a*b))