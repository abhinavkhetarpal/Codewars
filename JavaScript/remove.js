function remove (string) {
    let arr = string.split("")
    let filtered = arr.filter(x => x!="!")
    let excl = filtered.push("!")
    return filtered.join("")
   }

// Refactored Solution

function remove(string){
    return string.split("!").join("") + "!"
}
