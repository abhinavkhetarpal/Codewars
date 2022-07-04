const areaOrPerimeter = function(l , w) {
    if (l == w){
      return l*w
    }
    else {
      return l*2 + w*2
    }
  };

  // Refactored

  const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };