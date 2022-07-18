function index(array, n){
    if (!array[n]) return -1
    else {
     return array[n]**n
    }
  }

  // Refactored

  const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

  // Refactored v2
  
  function index(array, n){
    return array[n] ** n || -1;
  }
