function findShort(s){
  return s.split(" ").map(x => x.length).sort((a,b) => a-b)[0]
}

// Alternative solution using spread operator

function findShort(s){
    let lengthOfWords = s.split(" ").map(x => x.length)
    return Math.min(...lengthOfWords)
  }

// Solution in one line

const findShort = s => Math.min(...s.split(" ").map(x => x.length))