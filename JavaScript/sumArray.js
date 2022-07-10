function sumArray(array) {
    if (Array.isArray(array) && array.length>1){
      let asc = array.sort((a,b) => a-b)
      return asc.reduce((acc,x) => acc + x) - asc[0] - asc[asc.length-1]
      
    }
    return 0
  }

  // Refactored solution
  
  sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

  // Refactored v2

  function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }