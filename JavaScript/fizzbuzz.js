/* Instructions

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/


/* 
Parameters: nums >= 1
Returns: array of nums/strings
Examples: fizzbuzz(3) --> [1,2,'Fizz']
          fizzbuzz(5) --> [1,2,'Fizz',4,'Buzz']
          fizzbuzz(15) -> [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']
Pseudocode:

1. create array to store result
2. for loop from 1 up to n
3. if num % 3 & num % 5 are both 0 add 'FizzBuzz' to array, else if num % 3 is 0 add 'Fizz' to array , elseif num% 5 is 0 add 'Buzz' to array, else add num
4. return array

*/

function fizzbuzz(n){
  const result = []
  for (let i = 1; i <=n; i++){
    if (i % 3 == 0 && i % 5 == 0) result.push('FizzBuzz')
    else if (i % 3 == 0) result.push('Fizz')
    else if (i % 5 == 0) result.push('Buzz')
    else result.push(i)
  }
  return result
}


