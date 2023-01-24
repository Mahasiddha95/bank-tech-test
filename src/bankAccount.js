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

    withdrawal(amount) {
      if(typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid withdrawal amount");
      }
      if(amount > this.balance) {
        throw new Error("Insufficient balance");
      }
      this.balance -= amount;
      this.history.push({
        date: new Date(),
        type: 'withdrawal',
        amount: amount,
        balance: this.balance
      });
    };

    printStatement() {
    let statement = "date || credit || debit || balance\n";
    this.history.reverse().forEach(transaction => {
      statement +=
        `${transaction.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })} || ${transaction.type === 'deposit' ? transaction.amount : ''} || ${transaction.type === 'withdrawal' ? transaction.amount : ''} || ${transaction.balance}\n`
    });
    return statement;
  }};
  
  module.exports = BankAccount;
