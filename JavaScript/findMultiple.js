function findMultiples(integer, limit) {
    let newArr = []
    let count = integer
    while (count <= limit){
      newArr.push(count)
      count+=integer
    }
    return newArr    
  }

  // Refactored

  function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }

  // Refactored again

  function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
  }