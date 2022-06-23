function customSum(array){
    // Alert the sum of the second lowest and second highest number
    array = array.sort((a,b) => a - b)
    alert(`${array[1]} + ${array[array.length-2]} = ${array[1] + array[array.length-2]}`)
}

customSum([1,9,5,3,12,10,2]) // [1,2,3,5,9,10,12] -> 2 + 10 = 12