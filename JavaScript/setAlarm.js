function setAlarm(employed, vacation){
    return employed && !vacation ? true : false
   }

// Refactored

function setAlarm(employed, vacation){
    return employed && !vacation;
  }