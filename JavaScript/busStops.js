var number = function(busStops){
    return busStops.reduce((pV,cV) => pV + (cV[0] - cV[1]),0)
  }

// Refactored using destructuring assignment syntax

const number = (busStops) => busStops.reduce((rem,[on,off]) => rem + on - off, 0)