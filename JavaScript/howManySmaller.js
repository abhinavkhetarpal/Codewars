
function howManySmaller(arr,n){
    return arr.map(x => +x.toFixed(2)).filter(x => x < n).length
}

// Refactored for brevity

function howManySmaller(arr,n){
    return arr.filter(x => +x.toFixed(2) < n).length;
}