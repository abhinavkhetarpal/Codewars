function  calculateAge(birthYear,refYear) {
    let age = refYear - birthYear
    if (age < 0){
      if (age === -1){
        return `You will be born in ${Math.abs(age)} year.`
      }
      return `You will be born in ${Math.abs(age)} years.`
    }
    else if (age  > 0){
      if (age === 1){
        return `You are ${Math.abs(age)} year old.`
      }
      return `You are ${Math.abs(age)} years old.`
    }
    else return `You were born this very year!`
  }

  // Refactored for DRYness

  function  calculateAge(m, n) {
    if(m == n) return 'You were born this very year!';
    var year = Math.abs(m-n) == 1 ? 'year' : 'years';
    if(m < n) return "You are "+(n-m)+' '+year+' old.';
    if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
  }