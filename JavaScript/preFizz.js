function preFizz(n) {
    return Array(n).fill(1).map((x,i) => i+1)
  }

  // Refactored

  let preFizz = n => [...Array(n)].map((x, i) => i+1);
