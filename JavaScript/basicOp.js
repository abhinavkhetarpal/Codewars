function basicOp(operation, value1, value2)
{
  switch (operation){
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default: 
        return 'Operation must be one of + - * /';
  }
}

// Refactored Solution
function basicOp(operation, value1, value2)
{
  var math  = {
    '+': function(v1,v2) {return v1 + v2},
    '-': function(v1,v2) {return v1 - v2},
    '*': function(v1,v2) {return v1 * v2},
    '/': function(v1,v2) {return v1 / v2}
  };
  return math[operation](value1,value2)
}
