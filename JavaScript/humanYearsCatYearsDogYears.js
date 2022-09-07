var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0
    let dogYears = 0
    if (humanYears === 1){
      catYears = 15
      dogYears = 15
    }
    else if (humanYears === 2){
      catYears = 15 + 9
      dogYears = 15 + 9
    }
    else if (humanYears > 2){
      catYears = 15 + 9 + 4*(humanYears-2)
      dogYears = 15 + 9 + 5*(humanYears-2)
    }
    return [humanYears,catYears,dogYears]
  }

  // Refactored for brevity

  var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }

  // Refactored using switch statements

  function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
    
  }
