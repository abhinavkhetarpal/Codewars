function getNumberFromString(s) {
    return Number(s.split("").filter(x => "0123456789".includes(x)).join(""))
}