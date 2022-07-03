function rentalCarCost(d) {
    let cost = 40*d
    switch (true){
        case (d>=7):
          return cost -= 50
        case (d>=3):
          return cost -= 20
        default:
        return cost;        
    }
  }

  // Refactored Solution

  function baseCost(days, rate){
    return days * rate
  }
  function discount(days){
    if (days >=7){
        return 50
    }
    else if (days >=3){
        return 20
    }
    else{
        return 0
    }
  }
  function rentalCarCost(days){
    return baseCost(days,40) - discount(days)
  }