function DNAtoRNA(dna) {
    let key = {
      "G" : "G",
      "C" : "C",
      "A" : "A",
      "T" : "U"
    }
    return dna.split("").map(x => key[x]).join("")
  }

  // Refactored

  function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }