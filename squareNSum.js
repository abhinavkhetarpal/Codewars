function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}