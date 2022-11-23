const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0
  let sum = 0
  for (let i = begin; i <= end; i+= step){
    sum += i
  }
  return sum
};

// Refactored

const sequenceSum = (begin,end,step) => {
    let sum = 0
    for (let i = begin; i <= end; i+= step){
        sum += i
      }
    return sum
}