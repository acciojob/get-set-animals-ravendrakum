class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }

  // Override makeSound method for Dog
  makeSound() {
    console.log("Woof woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("Purr");
  }

  // Override makeSound method for Cat
  makeSound() {
    console.log("Meow");
  }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
