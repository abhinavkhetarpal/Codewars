var cubeChecker = function(volume, side){
  if (side >0 && volume >0 && side**3 == volume) return true
  else return false
};

// Refactored for brevity

var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
  };