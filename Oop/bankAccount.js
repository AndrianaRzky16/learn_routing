// class BankAccount {
//   balance = 0;
//   transactions = [];

//   constructor(accountnumber, accountholder, balance, frozen = false) {
//     this.accountnumber = accountnumber;
//     this.accountholder = accountholder;
//     this.balance = balance;
//     this.isFrozen = frozen;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(new Transaction(this.number, amount));
//   }

//   withdraw(amount) {
//     if (amount > this.balance) {
//       throw new Error("Insufficient balance");
//     }

//     this.balance -= amount;
//     this.transactions.push(new Transaction(this.number, -amount));
//   }

//   toString() {
//     const balance = formatter(this.balance);
//     return `A/N (${this.number}) - ${this.owner}: ${balance}`;
//   }

//   getBalance() {
//     return formatter(this.balance);
//   }

//   getTransactions() {
//     return this.transactions;
//   }
// }

//   deposit(amount) {
//     if (!this.isFrozen) {
//       this.balance += amount;
//       // console.log("Dana Berhasil Ditambah");
//     } else {
//       console.log("Dana Gagal Ditambah.");
//     }
//   }

//   withdraw(amount) {
//     if (this.balance > amount) {
//       this.balance -= amount;
//       // console.log("Dana Berhasil Diambil");
//       return true;
//     } else {
//       console.log("Dana tidak mencukupi untuk penarikan.");
//       return false;
//     }
//   }

//   getBalance() {
//     console.log(`${this.accountholder}'s Balance: ${this.balance}`);
//     return this.balance;
//   }

//   freeze() {
//     this.isFrozen = true;
//   }

//   unfreeze() {
//     this.isFrozen = false;
//   }
// }

// class BankAccount {
//   constructor(accountNumber, accountHolder, balance) {
//     this.accountNumber = accountNumber;
//     this.accountHolder = accountHolder;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (!this.isFrozen) {
      this.balance += amount;
      // console.log("Dana Berhasil Ditambah");
      this.listBalance(); // Update and list balance after deposit
    } else {
      console.log("Dana Gagal Ditambah.");
    }
  }

  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
      // console.log("Dana Berhasil Diambil");
      this.listBalance(); // Update and list balance after withdrawal
      return true;
    } else {
      console.log("Dana tidak mencukupi untuk penarikan.");
      return false;
    }
  }

  listBalance() {
    console.log(`Current Balance: ${this.balance}`);
  }

  freeze() {
    this.isFrozen = true;
  }

  unfreeze() {
    this.isFrozen = false;
  }
}

export { BankAccount };
