function mergeArrays(arr1, arr2) {
    let mergedAndSorted = arr1.concat(arr2).sort((a,b) => a-b)
    return mergedAndSorted.filter((x,i) => mergedAndSorted.indexOf(x) === i)
  }