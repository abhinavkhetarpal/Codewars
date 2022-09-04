function ensureQuestion(s) {
    if (s.endsWith("?")) return s
    else return s + "?"
  }

  // Refactored

  const ensureQuestion = s => s.endsWith('?') ? s : s +'?'
