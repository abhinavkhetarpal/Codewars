/* Instructions

Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

*/

class Person {
    constructor(name, age) {
      this._name = name
      this._age = age
    }
    get info(){
      return `${this._name}s age is ${this._age}`
    }
  }