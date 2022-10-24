function squareDigits(num){
    return +num
          .toString()
          .split("")
          .map(x => Number(x)**2)
          .join("")
  }