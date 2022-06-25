function bmi(weight, height) {
    const bmi = Math.round((weight/Math.pow(height,2))*100)/100 // Rounded to 2 decimal places
    if (bmi <= 18.5) return 'Underweight'
    else if (bmi <= 25.0) return 'Normal'
    else if (bmi <= 30.0) return 'Overweight'
    else if (bmi > 30) return 'Obese'
}

// Using switch

function bmi(weight, height) {
    const bmi = Math.round((weight/Math.pow(height,2))*100)/100 // Rounded to 2 decimal places
    switch (true) {
      case bmi <=18.5:
      return 'Underweight';
      case bmi <=25.0:
      return 'Normal';
      case bmi <=30:
      return 'Overweight';
      default:
      return 'Obese';      
    }
}