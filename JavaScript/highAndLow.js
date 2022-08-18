function highAndLow(numbers){
    let ascendingOrder = numbers.split(" ").map(x => Number(x)).sort((a,b) => a - b)
    return ascendingOrder[ascendingOrder.length - 1] + " " + ascendingOrder[0]
  }

  // Refactored

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

  // Refactored again

  function highAndLow(numbers){
    numbers = numbers.split(" ")
    return `${Math.max(...numbers)} ${Math.min(...numbers)}` 
  }