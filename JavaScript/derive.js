function derive(c,e) {
    return `${c*e}x^${e-1}`
  }

  // Refactored

  function derive(a, b) {
    return (a * b) + "x^" + (b - 1);
  }