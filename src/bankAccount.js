class BankAccount {
  constructor() {
    this.transactions = []
    this.balance = 0
  }

  deposit(amount) {
    if(amount <= 0 || !Number.isInteger(amount)){
      throw new Error('Invalid deposit amount');
    }
    this.balance += parseFloat(amount)
    this.transactions.push({
      date: new Date().toLocaleDateString(),
      credit: parseFloat(amount).toFixed(2),
      debit: null,
      balance: this.balance.toFixed(2)
    })
  }

  withdraw(amount) {
    if(amount <= 0 || !Number.isInteger(amount)){
      throw new Error('Invalid withdrawal amount');
    }
    if(amount > this.balance){
      throw new Error('Insufficient balance');
    }
    this.balance -= parseFloat(amount)
    this.transactions.push({
      date: new Date().toLocaleDateString(),
      credit: null,
      debit: parseFloat(amount).toFixed(2),
      balance: this.balance.toFixed(2)
    })
  }

  printStatement() {
    console.log("date || credit || debit || balance")
    this.transactions.reverse().forEach(transaction => {
      console.log(`${transaction.date} || ${transaction.credit || ""} || ${transaction.debit || ""} || ${transaction.balance}`)
    })
  }
}

module.exports = BankAccount;
