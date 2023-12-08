// Inheritance

//Animal.js

class Animal {
  constructor(name, color, age = null) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
    if (this.age) {
      console.log(`${this.name} is ${this.age} years old.`);
    }
    if (this.color) {
      console.log(`${this.name} is ${this.color}.`);
    }
    console.log();
  }
}

export class Birds extends Animal {
  constructor(color, name) {
    super(name);
    this.color = color;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

export class Dog extends Animal {
  speak() {
    console.log(`${this.name} Gug gug gug.`);
  }
}

export class Cat extends Animal {
  speak() {
    console.log(`${this.name} Meong Meong.`);
  }
}

export class Tiger extends Animal {
  speak() {
    console.log(`${this.name} Macannnnnnnnnnn.`);
  }
}

// class Birds extends Animal {}

// const tweety = new Birds("Tweety");

// tweety.speak();

// // Method Overridings

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Buddy");
// dog.speak();
