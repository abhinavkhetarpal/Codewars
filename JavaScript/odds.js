function odds(values){
    return values.filter(x => x%2 == 1 );
  }

  // Refactored

  function odds(values){
    return values.filter( v => v%2 );
  }