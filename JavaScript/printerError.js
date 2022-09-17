function printerError(s) {
    s = s.split("")
    const numerator = s.filter(x => x > "m").length
    const denominator = s.length
    return `${numerator}/${denominator}`
}