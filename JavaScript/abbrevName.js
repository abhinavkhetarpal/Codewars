function abbrevName(name){
    let space = name.indexOf(' ')
    return (name[0] + '.' + name[space+1]).toUpperCase()
}

// Refactored solution

function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}