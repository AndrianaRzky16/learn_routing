// var i;
// import { name } from "pubsub-js";
// import { name } from 'pubsub-js';
for (i = 10; i > 0; i--) console.log(i);

function greet() {
  //   console.log("Anak Arab");
}

// greet();

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(2));
//Define Array
const names = ["alice", "bob", "charlie"];
// //Access and manipulate array
// console.log("Lst of Name:", names);
// //Add a new name to the end of the array
names.push("Frank");
// console.log("After Adding 'Frank':", names);
// //remove the last name from the array
names.pop();
// console.log("After Removing the Last Name", names);
names.reverse();
// console.log("Reverse list Name:", names);

// //access a specific name by index
const secondName = names[1];
// console.log("The second Name in the List is:", secondName);

// //find the number of name in the array
const numberOfNames = names.length;
// console.log("Number of name in the List:", numberOfNames);

const string = "Hello World";
console.log(string.split("").reverse().join(""));

//Palindrome

function isPalindrome(str) {
  // Ignore spaces and punctuation
  str = str.replace(/[^\w]/g, "");

  // Reverse the string
  const reversedStr = str.split("").reverse().join("");

  // Compare the original string with the reversed string
  return str === reversedStr;
}

const str = "katak";

console.log(isPalindrome(str)); // true

const str2 = "aku";

console.log(isPalindrome(str2)); // false

function fibonacci(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fibonacci(8));

// const firstname = "John";
// const lastName = "Doe";

// console.log(firstname, "", lastName);

//for
// Gunakan `for` loop untuk mencetak angka dari 1 hingga 10.
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
// Buat fungsi `greet()` yang menerima parameter `name` dan mengembalikan pesan sapaan.
// function greet(name) {
//   return `Halo, ${name}!`;
// }

// Panggil fungsi `greet()` dengan parameter "John" dan tampilkan hasilnya.
// const greeting = greet("John");
// console.log(greeting); // "Halo, John!"

// Buat fungsi `calculateArea()` yang menerima parameter `width` dan `height` dan mengembalikan luas persegi panjang.
// function calculateArea(width, height) {
//   return width * height;
// }
// const area = calculateArea(10, 5);
// console.log(area);

const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
};

// Akses properti `name` pada objek `person` dan tampilkan nilainya
console.log(person.name); // John Doe

// Ubah nilai properti `age` pada objek `person` menjadi 35
person.age = 35;

// Tambahkan properti `city` ke objek `person` dengan nilai "Jakarta"
person.city = "Jakarta";

// Gunakan `for-in` loop untuk mencetak semua properti dan nilainya pada objek `person`
for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }

  totalPrice() {
    return this.price * this.quantity;
  }
}

const product = new Product("iPhone 13 Pro", 15000000, 1);

console.log("Nama produk: " + product.getName()); // iPhone 13 Pro
console.log("Harga produk: " + product.getPrice()); // 1.500.000
console.log("Jumlah produk: " + product.getQuantity()); // 1
console.log("Total harga produk: " + product.totalPrice()); // 1.500.000
