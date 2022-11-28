function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    currentDate = Date.parse(currentDate)
    expirationDate = Date.parse(expirationDate)
    return (enteredCode === correctCode && currentDate <= expirationDate) 
  }

// Refactored for brevity

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && 
           Date.parse(currentDate) <= Date.parse(expirationDate)
  }
