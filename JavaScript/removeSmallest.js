function removeSmallest(numbers) {
    let numCopy = numbers.slice()
    let index = numCopy.indexOf(Math.min(...numCopy))
    if (index > -1){
      numCopy.splice(index,1)
    }
    return numCopy
  }