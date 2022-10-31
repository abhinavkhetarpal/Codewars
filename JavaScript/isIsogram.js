function isIsogram(str){
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
      if ((str.indexOf(str[i])) != str.lastIndexOf(str[i])) return false
    }
    return true
  }