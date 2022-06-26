function digitize(n) {
    return String(n).split("").map(Number).reverse()
}

// Refactored solution

function digitize(n) {
    return Array.from(String(n),Number).reverse()
}