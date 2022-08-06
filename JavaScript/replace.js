function replace(s){
    return s.split("").map(x => "aeiouAEIOU".includes(x) ? x = "!" : x).join("")  
  }

  // Using regex

  function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }