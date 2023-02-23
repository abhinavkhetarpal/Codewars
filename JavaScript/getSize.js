/* Instructions

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

*/

function getSize(width, height, depth){
    return [2 * (width * height + height * depth + depth * width), width * height * depth]
}

// Refactored for readability

const getSize = (a,b,c) => [2*(a*b+b*c+a*c),a*b*c]

// Alternative solution

function getSize(width, height, depth){
    var box = { width: width, height:height, depth:depth}
    return [getArea(box), getVolume(box)]
}
    
function getArea(box){
    return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth))
}
  
function getVolume(box){
    return box.width * box.height * box.depth
}
