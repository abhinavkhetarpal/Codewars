function getSum( a,b )
{
   if (a === b) return a
  let sum = 0
  if (a < b){
      while (a <= b){
        sum += a
        a++
      }
    return sum
  }
  if (a > b){
    while (a >= b){
      sum += a
      a--
    }
    return sum
  }
}

//  Refactored

function GetSum( a,b )
{
  let sum = 0;
  
  if(a < b)
    while(a <= b) sum += a++;
  else
    while(a >= b) sum += a--;
      
  return sum;
}