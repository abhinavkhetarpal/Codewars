const binaryArrayToNumber = arr => {
    let sum = 0;
    arr.forEach((x,i) => {
      if (x == 1) sum += Math.pow(2,arr.length-(i+1))
    })
    return sum
  };

// Refactored

const binaryArrayToNumber = arr => { 
    return arr.reduce((a,b,i) => a + (b == 1 
        ? Math.pow(2,arr.length-(i+1)) 
        : 0),0)
  };

// Refactored again

const binaryArrayToNumber = arr => parseInt(arr.join(''),2)