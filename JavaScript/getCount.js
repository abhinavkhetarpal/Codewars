function getCount(str) {
    let count = 0
    str.split("").forEach(x => {
      if ("aeiou".includes(x)){
        count++
      }
    })
    return count
  }

  // Refactored

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }