function fiveLine(s){
  s = s.trim()
  let tmp = s
  let res = [s]
  for (let i = 1; i <5 ; i++){
    res.push(s += tmp)
  }
  return res.join("\n")
}

// Refactored solution

function fiveLine(s){
    return [1,2,3,4,5].map(x=> s.trim().repeat(x)).join("\n")
}