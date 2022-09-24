// First attempt

function reverseWords(str) {
    let arr = str.split(" ")
    let arr2 = arr.map(x => x.split(""))
    let arr3 = arr2.map(x => x.reverse())
    return arr3.map(x => x.join("")).join(" ")
  }

  // Refactored

  function reverseWords(str){
    return str.split(" ").map(x => {
        return x.split("").reverse().join("")
    }).join(' ')
}
