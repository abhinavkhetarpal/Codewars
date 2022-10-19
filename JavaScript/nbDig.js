// First attempt

function nbDig(n, d) {
    let squares = []
    for (let i = 0; i <= n; i++){
      squares.push(i**2)
    }
    let arrayOnes = squares.filter(x => String(x).includes(`${d}`))
    let stringOnes = arrayOnes.join("")
    let numOnes = 0
    for (let i = 0, j = stringOnes.length; i < j; i++){
      if (stringOnes[i] == `${d}`) numOnes ++ 
    }
    return numOnes
  }

// Refactored Solution

function nbDig(n, d) {
    let result = 0
    for (let i = 0; i <= n ; i++){
      let square = String(i*i).split("")
      square.forEach(x => x == d ? result++ : null)
    }
    return result
  }