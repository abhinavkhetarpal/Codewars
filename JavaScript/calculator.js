function calculator(a,b,sign){
    if (typeof a === "number" && typeof b === "number" && (sign == "+" || sign == "-" || sign == "*" || sign == "/")){
      if (sign == "+") return a+b
      else if (sign == "-") return a-b
      else if (sign == "*") return a*b
      else return a/b
    }
    return "unknown value"
  }

  // Refactored

  function calculator(a,b,sign){
    if ((typeof a === "number") && (typeof b === "number")) {
      switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      }
    }
    return "unknown value";
  }

  // Refactored using objects

  function calculator(a,b,sign){
    var oper = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
      "/": a / b
    }
    return oper[sign] ? oper[sign] : "unknown value"
  }

