function splitAndMerge(string, separator) {
    return string.split(" ").map(x => x.split("").join(separator)).join(" ")
  }