function enough(cap, on, wait) {
    if ((on+wait)>cap){
      return ((on+wait)-cap)
    }
    else return 0
  }

  // Refactored

  function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }