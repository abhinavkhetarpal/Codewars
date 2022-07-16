function move (position, roll) {
    return position + 2*roll
  }

// Refactored

const move = (position, roll) => position + roll * 2
