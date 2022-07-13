function findDifference(a, b) {
    return Math.abs(a.reduce((a,b) => a*b)-b.reduce((a,b) => a*b))
  }