function noBoringZeros(n) {
    let str = String(n)
    while (str.endsWith('0')){
      str = str.slice(0,-1)
    }
    return Number(str)
  }

  // Refactored

  function noBoringZeros(n) {
    while(n%10 === 0 && n!== 0){
        n/=10
    }
    return n
  }