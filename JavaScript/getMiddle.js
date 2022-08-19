const getMiddle = s => {
    return s.length % 2 === 0 ? s[Math.floor((s.length-1)/2)] + s[s.length/2] : s[(s.length-1)/2];
  }

// Refactored

function getMiddle(s){
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }
