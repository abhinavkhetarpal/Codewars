function plural(n) {
    return (n>=0 && n!=1) ? true: false
  }

  // Refactored + accounted for values < 0

  function plural(n) {
    return n !== 1;
  }