function chromosomeCheck(sperm) {
    return sperm[1]==="X" ? `Congratulations! You're going to have a daughter.` : `Congratulations! You're going to have a son.`
  }

  // Refactored

  function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
  }