/* Instructions

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

*/

class Ghost {
    constructor(){
      this.color = this.randomColor()
    }
    randomColor(){
      let randomNum = Math.ceil(Math.random()*4)
      let color = {
        1: 'white',
        2: 'yellow',
        3: 'purple',
        4: 'red'
      }
      return color[randomNum]
    }
  }

// Refactored

class Ghost {
    constructor(){
        this.color = ["white","yellow","purple","red"][Math.floor(Math.random()*4)]
    }
}

// ES5 Syntax

function Ghost(){
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random()*4)]
}