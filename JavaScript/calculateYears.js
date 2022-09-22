function calculateYears(principal, interest, tax, desired) {
    let years = 0  
    while (principal < desired){
        principal += principal*interest - (principal*interest*tax)
        years ++
      }
    return years
  }

  // Refactored

  function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}