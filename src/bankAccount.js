class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({
      date: new Date(),
      type: 'deposit',
      amount: amount,
      balance: this.balance
    });
  }

  withdrawal(amount) {
    if(amount > this.balance) {
      throw new Error("Insufficient balance");
    } else {
        this.balance -= amount;
        this.history.push({
          date: new Date(),
          type: 'withdrawal',
          amount: amount,
          balance: this.balance
    });
  }};

  printStatement() {
  console.log("date || credit || debit || balance");
  this.history.forEach(transaction => {
    console.log(
      `${transaction.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}||${transaction.type === 'deposit' ? transaction.amount : ''}||${transaction.type === 'withdrawal' ? transaction.amount : ''}||${transaction.balance}`
    );
  });
}};

module.exports = BankAccount;
