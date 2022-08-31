function calculateTip(amount, rating) {
    rating = rating.toLowerCase()
    const ratings = {
      "terrible": 0,
      "poor": 0.05,
      "good": 0.10,
      "great":0.15,
      "excellent":0.20   
    }
    if (rating in ratings){
        return Math.ceil(amount*ratings[rating])
      }
    return "Rating not recognised"
  }

  // Refactored

  const TIPS = {
    "terrible": 0.0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2
  };
  
  const calculateTip = (amount, rating) => {
    rating = rating.toLowerCase();
    
    return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
  };