/* Instructions

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/

/*
Parameters: numPill: number of pillars, dist: distance between each pillar (in meters),
                     width: width of each pillar (in centimeters)
Returns: distance between first and last pillar (in centimeters)
Examples: pillars(5, 10, 10) -> (4 * dist)*100 + (3 * width) = 4030
          pillars(1,10,10) -> (0)
          pillars(2,20,25) -> (1 * 20)*100 = 2000
Pseudocode:
  // if numPill <= 1 return 0
  // else
    // distance = (numPill - 1)*(dist)*100 + (numPill - 2)*(width)
    // return distance
*/

function pillars(numPill, dist, width) {
    return numPill <= 1 ? 0 :  (numPill - 1)*dist*100 + (numPill-2)*width
}

// Alternative solution

function pillars(numPill, dist, width){
    return Math.max(0,numPill-1)*dist*100 + Math.max(0,numPill-2)*width
}