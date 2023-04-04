/* Instructions

Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

*/

/*
P: integer representing the month (between 1 to 12 inclusive)
R: days in the month 
E: howManyDays(1) -> 31
   howManyDays(2) -> 28
   howManyDays(4) -> 30
P:

*/

function howManydays(month){
    let days
    switch (month){
      case 4:
        days = 30
        break;
      case 6:
        days = 30
        break;
      case 9:
        days = 30
        break;
      case 11:
        days = 30
        break;
      case 2:
        days = 28
        break;
      default:
        days = 31
    }
    return days;
  }

// Refactored

function howManydays(month){
    switch (month){
      case 4:
        return 30
      case 6:
        return 30
      case 9:
        return 30
      case 11:
        return 30
      case 2:
        return 28
      default:
        return 31
    }
}

// Refactored again 

function howManydays(month){
    switch (month){
        case 2: return 28
        case 4:
        case 6:
        case 9:
        case 11: return 30
    }
    return 31
}