/* Instructions

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

/* 
Parameters: 2 non empty arrays -> answers & student response
Returns: numerical score (if score <0 return 0) -> +4 correct, -1 incorrect, 0 blank [empty string]
Examples: checkExam([a,a,b,b],[a,c,b,d]) -> 4 -1 + 4 - 1 = 6
Pseudocode: 

1. map array
2. check if each element of studResponse array matches answerArray
3. return a different number for each of the 3 possible scenarios
4. reduce array to get sum of scores
5. if score is < 0 return 0 else return score

*/

function checkExam(array1, array2) {
    let score = array2.map((x,i) => x == array1[i] ? 4 : x == '' ? 0 : -1)
                      .reduce((a,b) => a+b)
    return score < 0 ? 0 : score // return Math.max(score,0)
   }
   



