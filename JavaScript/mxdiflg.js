function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    a1 = a1.map(x => x.length)
    a2 = a2.map(x => x.length)
    const a1min = Math.min(...a1)
    const a1max = Math.max(...a1)
    const a2min = Math.min(...a2)
    const a2max = Math.max(...a2)
    
    return Math.max(a2max-a1min,a1max-a2min)  
}

// Refactored for brevity

function mxdiflg(a1, a2){
    if (a1.length === 0 || a2.length === 0) return -1
    a1 = a1.map(x => x.length)
    a2 = a2.map(x => x.length)
    return Math.max(Math.max(...a1)- Math.min(...a2), Math.max(...a2)-Math.min(...a1))
}