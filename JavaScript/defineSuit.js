function defineSuit(card) {
    if (card.endsWith('♣')) return 'clubs'
    else if (card.endsWith('♦')) return 'diamonds'
    else if (card.endsWith('♥')) return 'hearts'
    else if (card.endsWith('♠')) return 'spades'  
  }

  // Refactored

  function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }