function check(a, x) {
    return a.some(e => e === x)
  }

// Refactored

const check = (a,x) => a.includes(x);
