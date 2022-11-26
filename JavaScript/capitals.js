const capitals = function (word) {
  let arr = []
  word.split("").forEach((x,i) => x == x.toUpperCase() ? arr.push(i) : null)
  return arr
};

// Refactored

function capitals(word){
    return word.split("").reduce((acc,x,i) => x.toUpperCase() == x ? acc.concat(i) : acc,[])
}