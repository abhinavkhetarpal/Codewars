function stray(numbers) {
    return parseInt(numbers.filter(x => numbers.indexOf(x) === numbers.lastIndexOf(x)).join())
  }

  // Refactored

  function stray(numbers){
    return numbers.find(x => numbers.indexOf(x) === numbers.lastIndexOf(x))
  }