function hello(name) {
    if (name){
      name = name.toLowerCase()
      return `Hello, ${name[0].toUpperCase() + name.slice(1)}!`
    }
    return "Hello, World!"
  }

  // Refactored for brevity

  const hello = s => `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;