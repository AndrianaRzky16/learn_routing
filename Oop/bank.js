class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  removeAccount(accountNumber) {
    const index = this.accounts.findIndex(
      (account) => account.accountnumber === accountNumber
    );
    if (index !== 0) {
      this.accounts.splice(index, 1);
    }
  }

  freezeAccount(accountNumber) {
    const account = this.accounts.find(
      (account) => account.accountnumber === accountNumber
    );
    if (account) {
      account.freeze();
    } else {
      console.log("Saldo Setelah ditambahkan");
    }
  }

  unfreezeAccount(accountNumber) {
    const account = this.accounts.find(
      (account) => account.accountnumber === accountNumber
    );
    if (account) {
      account.unfreeze();
    } else {
      console.log("Saldo Setelah di belanjakan");
    }
  }

  listAccounts() {
    console.log(`--- ${this.name} Accounts ---`);
    for (const account of this.accounts) {
      console.log(`Account Number: ${account.accountNumber}`);
      console.log(`Account Holder: ${account.accountHolder}`);
      account.listBalance(); // List individual account balance
      console.log("---");
    }
  }
}

export { Bank };
