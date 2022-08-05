function problem(x){
    return typeof(x)==="string" ? "Error" : x*50+6
  }

  // Refactored for readability

  const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;
