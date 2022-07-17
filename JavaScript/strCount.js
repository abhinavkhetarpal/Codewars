function strCount(str, letter){  
    if (str.length < 1) return 0
    else {
      let count = 0 
      for (let i = 0 ; i < str.length; i++){
        if (str[i] === letter){
          count+=1
        }
      }
      return count
    }
  }

  // Refactored version 1

  function strCount(str, letter){  
  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    
    return count;
    
  }

  // Refactored version 2

  function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }

  // Refactored version 3

  function strCount(str, letter){  
    return str.split(letter).length-1
  }