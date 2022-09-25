function sumDigits(number) {
    return String(number).split("").map(x => Number(x)).filter(x => "0123456789".includes(x)).
    reduce((a,b) => a+b)
  }


// Refactored

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }