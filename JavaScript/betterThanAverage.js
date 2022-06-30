function betterThanAverage(classPoints, yourPoints) {
    let sumClass = classPoints.reduce((a,b) => a + b)
    let average = (sumClass + yourPoints)/(classPoints.length+1)
    return yourPoints > average ? true : false;
  }

// Refactored Solution

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)
  }