// / 1. Variabel (Variable)
// const firstname = "John";
// const lastName = "Doe";

// console.log(firstname, "", lastName);

// 2. Tipe Data (Data Types)

// const age = 30;
// const isStudent = true;
// const ageType = typeof age;
// const isStudentType = typeof isStudent;

// console.log(ageType); // "number"
// console.log(isStudentType); // "boolean"

// 3. Operator

// const num1 = 10;
// const num2 = 20;

// const sum = num1 + num2;
// console.log(sum); // 30

// const difference = num1 - num2;
// console.log(difference); // -10

// const product = num1 * num2;
// console.log(product); // 200

// const quotient = num1 / num2;
// console.log(quotient); // 0.5

// 4. Kondisional/Percabangan (Conditional Statements)

// const age = 18;

// if (age >= 18) {
//   console.log("Anda sudah Dewasa");
// } else {
//   console.log("Anda Belum Dewasa");
// }

// 5. Perulangan (Loop)
//for
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//while
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// //do while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// // 6. Fungsi (Function)

// function greet(name) {
//   return `Halo, ${name}!`;
// }
// const greeting = greet("John");
// console.log(greeting);

// function calculateArea(width, height) {
//   return width * height;
// }
// const area = calculateArea(10, 5);
// console.log(area);

// 7. Array

// const fruits = ["apple", "banana", "orange"];

// console.log(fruits[0]);

// fruits[1] = "grape";

// fruits.push("mango");

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// 8. Objek (Object)

// const person = {
//   name: "John Doe",
//   age: 30,
//   occupation: "Software Engineer",
// };

// console.log(person.name); // John Doe

// person.age = 35;

// person.city = "Jakarta";

// for (const property in person) {
//   console.log(`${property}: ${person[property]}`);
// }

// 9. Kelas (Class)

// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   getName() {
//     return this.name;
//   }

//   getPrice() {
//     return this.price;
//   }

//   getQuantity() {
//     return this.quantity;
//   }

//   totalPrice() {
//     return this.price * this.quantity;
//   }
// }

// const product = new Product("iPhone 13 Pro", 15000000, 1);

// console.log("Nama produk: " + product.getName());
// console.log("Harga produk: " + product.getPrice());
// console.log("Jumlah produk: " + product.getQuantity());
// console.log("Total harga produk: " + product.totalPrice());
