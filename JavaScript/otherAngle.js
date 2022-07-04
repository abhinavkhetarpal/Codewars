function otherAngle(a, b) {
    return 180 - (a+b)
  }

// Solution that validates inputs

function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
      return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
      return 0;
    return 180 - a - b; //return missing angle
  }