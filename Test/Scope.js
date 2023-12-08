// function localFunction() {
//   let localVar = "I'm Local";
//   console.log(localVar);
// }

// function addNumbers(a, b) {
//   const sum = a + b;
//   console.log("${a} and ${b} is: ${sum}");
// }
// addNumbers(5, 10);
// console.log(addNumbers);

// function outerFunction() {
//   const outerVar = "I'm Outer!";
//   function innerFunction() {
//     console.log(outerVar);
//   }
//   innerFunction();
// }

// outerFunction();
// innerFunction();

//

const transactions = [
  { id: 1, category: "groceries", amount: 50 },
  { id: 2, category: "clothing", amount: 75 },
  { id: 3, category: "groceries", amount: 30 },
  { id: 4, category: "electronics", amount: 120 },
  { id: 5, category: "clothing", amount: 60 },
];

const result = transactions.reduce(
  (summary, transaction) => {
    // Calculate total amount
    summary.totalAmount += transaction.amount;

    // Find the most expensive transaction
    if (transaction.amount > summary.mostExpensive.amount) {
      summary.mostExpensive = transaction;
    }

    // Group transactions by category
    if (!summary.transactionsByCategory[transaction.category]) {
      summary.transactionsByCategory[transaction.category] = [];
    }
    summary.transactionsByCategory[transaction.category].push(transaction);

    return summary;
  },
  {
    totalAmount: 0,
    mostExpensive: { amount: 0 },
    transactionsByCategory: {},
  }
);

console.log("Total Amount:", result.totalAmount);
console.log("Most Expensive Transaction:", result.mostExpensive);
console.log("Transactions by Category:", result.transactionsByCategory);

//reduce symple

const cartItems = [
  { id: 1, name: "Shoes", price: 100, quantity: 2 },
  { id: 2, name: "Shirt", price: 200, quantity: 3 },
  { id: 3, name: "T-shirt", price: 300, quantity: 4 },
  { id: 4, name: "Pants", price: 400, quantity: 5 },
];

cartItems.map((item) => {
  console.log(item.name);
});

const total = cartItems.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(total);
