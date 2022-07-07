function isPrime(n){
    for (let i = 2; i <=9; i++){
        if (n == i) continue
        if (n%i == 0) return `${n} is not prime` 
    }
    if (n>1) return `${n} is prime` 
    else return `${n} is not prime`
}

// Refactored

function isPrime(n){
    for (let i = 2, j = Math.sqrt(n); i <= j ; i++){
        if (n%i === 0) return false
    }
    return n > 1
}