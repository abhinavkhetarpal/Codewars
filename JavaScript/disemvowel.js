function disemvowel(str) {
    return str.split("").filter(x => !"aeiouAEIOU".includes(x)).join("")
  }

// Refactored

function disemvowel(str){
    const vowels = "aeiou"
    return str
        .split("")
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join("")
}