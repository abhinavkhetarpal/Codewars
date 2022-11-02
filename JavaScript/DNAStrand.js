function DNAStrand(dna){
    let s = ''
    for (let i = 0 ; i < dna.length ; i++){
      if (dna[i] == 'A') s += 'T'
      else if (dna[i] == 'T') s += 'A'
      else if (dna[i] == 'C') s += 'G'
      else if (dna[i] == 'G') s += 'C'
    }
    return s
  }

  // Refactored with OOP in mind

  function DNAStrand(dna){
    const pairs = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
    return dna.split("").map(x => pairs[x]).join("")
  }