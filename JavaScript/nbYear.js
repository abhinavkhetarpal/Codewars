function nbYear(p0, percent, aug, p) {
    let numPeople = p0
    let numYears = 0
      while (numPeople < p){
        numPeople = Math.floor(numPeople*(1 + (percent/100))) + aug
        numYears++
      }
    return numYears
  }

  // Refactored

  function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }