function isPalindrome(line) {
    let reversed = String(line).split("").reverse().join("")
    return reversed === line
}