function splitAndMerge(string, separator) {
    return string.split(" ").map(x => x.split("").join(separator)).join(" ")
  }

//without map

function splitAndMerge(string,separator) {
  let words = string.split(" ")
  let newArr = []
  for (let i = 0; i < words.length; i++){
    newArr.push(words[i].split("").join(separator))
  }
  return newArr.join(" ")
}