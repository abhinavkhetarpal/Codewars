function sumPositiveNums(array){
    return array.reduce((pV,cV) => cV > 0 ? pV + cV : pV + 0,0)
}

console.log(sumPositiveNums([1,-4,7,12]))