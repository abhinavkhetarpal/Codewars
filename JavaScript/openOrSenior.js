function openOrSenior(data){
    return data.map(x => x[0] >= 55 && x[1] > 7 ? "Senior" : "Open")
  }

// Refactored using destructuring assignment syntax

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }