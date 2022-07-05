function doubleChar(str) {
    return str.split("").map(x => x.repeat(2)).join('')
  }

  // Using spread operator

  function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
  }
