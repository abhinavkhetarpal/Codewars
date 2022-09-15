function longest(s1, s2) {
    let joined = s1.concat(s2)
    return joined.split("").filter((x,i) => joined.indexOf(x) === i).sort().join("")
  }