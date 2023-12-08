// import { Person } from "./person.js";

// const John = new Person("John", 25);
// John.greet();

// const Jane = new Person("Jane", 25);
// Jane.greet();

// import { Birds, Cat, Dog, Tiger } from "./Animal.js";

// const tweety = new Birds("Hijauuuuu Kuning Kelabuuuuu", "Tweety");
// const heli = new Dog("Saya gigit kamu");
// const aurora = new Cat("Urang mah");
// const macann = new Tiger("Abdi");

// tweety.speak();
// console.log(tweety.color());
// heli.speak();
// aurora.speak();
// macann.speak();

// console.log(Object.keys(tweety).length);

import { BankAccount } from "./bankAccount.js";
import { Bank } from "./bank.js";

const bca = new Bank("BCA");

const bcaAccount1 = new BankAccount("1234567890", "John Doe", 100000);
const bcaAccount2 = new BankAccount("9876543210", "Jane Doe", 200000);

// Add accounts to BCA
bca.addAccount(bcaAccount1);
bca.addAccount(bcaAccount2);

// Create Mandiri Bank
const mandiri = new Bank("Mandiri");

// Create Mandiri accounts
const mandiriAccount1 = new BankAccount("0987654321", "Alice Smith", 500000);
const mandiriAccount2 = new BankAccount("1122334455", "Bob Smith", 300000);

// Add accounts to Mandiri
mandiri.addAccount(mandiriAccount1);
mandiri.addAccount(mandiriAccount2);

// Print bank information
bca.listAccounts();
console.log();
mandiri.listAccounts();
// bank.removeAccount("1");

// Freeze John Doe's account
bca.freezeAccount("");

// John Doe's deposit will not be processed
bcaAccount1.deposit(200000);

// Jane Doe's deposit will be processed
bcaAccount2.deposit(200000);

// Display updated account information
bca.listAccounts();

// Unfreeze John Doe's account
bca.unfreezeAccount("");

// John Doe can now withdraw
bcaAccount1.withdraw(100000);

// Jane Doe can also withdraw
bcaAccount2.withdraw(100000);

// Display updated account information after withdrawals

mandiri.freezeAccount("");

// John Doe's deposit will not be processed
mandiriAccount1.deposit(200000);

// Jane Doe's deposit will be processed
mandiriAccount2.deposit(200000);

// Unfreeze John Doe's account
mandiri.unfreezeAccount("");

// John Doe can now withdraw
mandiriAccount1.withdraw(100000);

// Jane Doe can also withdraw
mandiriAccount2.withdraw(100000);

bca.listAccounts();
mandiri.listAccounts();

// const bank = new Bank();

// const account1 = new BankAccount("1", "John Doe");
// const account2 = new BankAccount("2", "Jane Doe", 10000);

// bank.addAccount(account1);
// bank.addAccount(account2);

// bank.listAccounts();

// console.log(`John's balance: ${account1.getBalance()}`); // 0
// console.log(`Jane's balance: ${account2.getBalance()}`); // 10000

// account1.deposit(2000);
// account2.withdraw(5000);

// console.log(`John's balance: ${account1.getBalance()}`); // 50000
// console.log(`Jane's balance: ${account2.getBalance()}`); // 50000

// console.log(`John's account balance is zero: ${account1.isBalanceZero()}`); // false
// console.log(`Jane's account balance is zero: ${account2.isBalanceZero()}`); // false

// // bank.removeAccount("1");
