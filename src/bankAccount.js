class BankAccount {
    constructor() {
      this.balance = 0;
      this.history = [];
    }

    deposit(amount) {
      if(typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid deposit amount");
      }
      this.balance += amount;
      this.history.push({
        date: new Date(),
        type: 'deposit',
        amount: amount,
        balance: this.balance
      });
    }
  }
  module.exports = BankAccount;
