/* Instructions

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

*/

function distanceBetweenPoints(a, b) {
    return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
}

// Refactored

function distanceBetweenPoints(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y)
}

// Destructuring Assignment Syntax

function distanceBetweenPoints({ x: x1, y: y1 } = a, { x: x2, y: y2 } = b) {
    return Math.hypot(x2 - x1, y2 - y1)
}