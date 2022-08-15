function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
  }

// Refactored

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }

// Refactored v2

const position = a => `Position of alphabet: ${"&abcdefghijklmnopqrstuvwxyz".indexOf(a)}`



