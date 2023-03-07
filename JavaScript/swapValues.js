/* Instructions

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

*/

function swapValues(array){
    var args = Array.prototype.slice.call(arguments[0])
    var temp = args[0]
    args[0] = args[1]
    args[1] = temp
}

// Alternative solution

function swapValues(array) {
    let swap = array[1]
    array[1] = array[0]
    array[0] = swap
 }

// Refactored

function swapValues(){
    return arguments[0].reverse()
}

// Refactored again

function swapValues(array){
    return array.reverse()
}

// One line solution

const swapValues = arr => arr.reverse()