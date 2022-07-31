function multiTable(number) {
    const fixed = [1,2,3,4,5,6,7,8,9,10]
    let newArr = []
    fixed.forEach(x => {
      newArr.push(`${x} * ${number} = ${x*number}`)
    })
    return newArr.join("\n")  
  }

  // Refactored

  const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')
