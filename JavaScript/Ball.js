class Ball{
    constructor(ballType){
      if (!ballType){
        this.ballType = "regular"
      }
      else {
        this.ballType = "super"
      }
    }
  }

  // Refactored

  class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }