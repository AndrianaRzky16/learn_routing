export const Person = {
  constructor(name = "John", age = 20) {
    this.name = name;
    this.age = age;
  },

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
  getName() {
    return this.name;
  },
};

// const person = {
//   name: "John Smith",
//   age: 30,
//   fullname: function () {
//     return `${this.name} ${this.age}`;
//   },
// };

// console.log(person.fullname());
