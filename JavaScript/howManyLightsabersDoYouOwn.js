function howManyLightsabersDoYouOwn(name) {
    if (name === "Zach") return 18 
    else return 0
  }

  // Refactored

  function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
  }