function whatNumberIsIt(n){
    let result
    switch (true){
        case (n > Number.MAX_VALUE):
          result = "Number.POSITIVE_INFINITY"
          break
        case (n < -Number.MAX_VALUE):
          result = "Number.NEGATIVE_INFINITY"
          break
        case (n == Number.MAX_VALUE):
          result = "Number.MAX_VALUE"
          break
        case (n == Number.MIN_VALUE):
          result = "Number.MIN_VALUE"
          break
        case (isNaN(n)):
          result = "Number.NaN"
          break
        default:
          result = n
    }
    return `Input number is ${result}`  
  }

// Refactored solution

function whatNumberIsIt(n){
    switch(n){
      case Number.MAX_VALUE: return ("Input number is Number.MAX_VALUE"); 
      case Number.MIN_VALUE: return  ("Input number is Number.MIN_VALUE");
      case Number.POSITIVE_INFINITY: return ("Input number is Number.POSITIVE_INFINITY");
      case Number.NEGATIVE_INFINITY: return ("Input number is Number.NEGATIVE_INFINITY");
      case Number(n) : return "Input number is " + n;
    default: return "Input number is Number.NaN";
    }
  }