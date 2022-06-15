// 8. Reduce exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce((obj,item) => {
    if (!(item in obj)){
        obj[item] = 0
    }
    obj[item]++
    return obj
},{})

console.log(transportation)