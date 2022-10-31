function accum(s) {
    // Converting input string to lowercase
    s = s.toLowerCase()
    // Creating array which will ultimately be converted to result string
    let res = []
    for (let i = 0, j = s.length; i < j; i++){
      for (let j = 1; j <= i+1; j++){
        // Every time we start a new sequence of letters, capitalize the first letter of the sequence
        if (j === 1) res.push(s[i].toUpperCase())
        else res.push(s[i])
      }
      // Add a dash after every sequence of letters
      res.push("-")
    }
    // Remove the last dash from the string (it is extra)
    res.pop()
    
    return res.join("")
  }

  // Refactored for brevity

  function accum(s) {
	return [...s].map((x,i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join("-")
}