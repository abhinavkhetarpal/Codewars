function past(h, m, s){
    return (h*60*60*1000) + (m*60*1000) + (s*1000)
  }

// Refactored Solution

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }