function remove(s,n){
    s = s.split("")
    for (let i = 0 ; i < n; i++){
      if (s.includes("!")){
        s.splice(s.indexOf("!"),1)
      }
    }
    return s.join("")
  }

  // Refactored

  function remove(s,n){
    for (let i=0;i<n;i++){
        s=s.replace("!","");
    }
    return s;
  }