function updateLight(current) {
    if (current == "green") return "yellow"
    else if (current == "yellow") return "red"
    else return "green"
  }

// Refactored with OOP in mind

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]