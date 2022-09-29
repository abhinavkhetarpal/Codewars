function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0){
        return []
      }

    let pos = []
    let neg = []
    
    input.forEach(x => x > 0 ? pos.push(x) : x < 0 ? neg.push(x) : true)

    return [pos.length, neg.reduce((a,b) => a+b,0)]
    
  }

  // Refactored for readability

  function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    let positive = 0;
    let negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}