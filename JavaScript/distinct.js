function distinct(a) {
    return a.filter((x,i) => a.indexOf(x)==i)
  }