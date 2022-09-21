function solution(nums){
    if (nums == null) return []
      if (nums.length == 0 || nums == null) return []
      return nums.sort((a,b) => a-b)
  }

  // Refactored

  function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }