var countSheep = function (num){
    let str = ""
    for (let i = 0 ; i < num; i++){
      str+= `${i+1} sheep...`
    }
    return str
  } 

  // Refactored Solution

  var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }

  // Refactored solution version 2

  var countSheep = function (n){
    return [...Array(n)].map((_,i)=>i+1+' sheep...').join``
  }