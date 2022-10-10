const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft*mpg >= distanceToPump
  };