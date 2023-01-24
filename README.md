# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time. This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Installation/Usage Instructions

To download and initialise the project:

```sh
$ git clone https://github.com/Mahasiddha95/bank-tech-test.git
$ cd bank-tech-test
$ npm install

```

To run the code:

```js
// To launch the node REPL

$ node

// Step 1 - require Account class

$ const Account = require("./src/bankAccount");

// Step 2 - create new instance of account

$ const account = new BankAccount();

// Step 3 - add few transactions to the class

$ account.deposit(1000)
$ account.deposit(3000)
$ account.deposit(500)

// Step 4 - withdraw some money from the account
  // note: will throw pre-built errors if amount is over the budget.

$ account.withdrawal(200)
$ account.withdrawal(50)

// Step 6 - print the statement to the console in the required format.

$ account.printStatement()


// To exit the node REPL

$ Ctrl+D

```

To run the tests:

```js
// run tests
$ jest
// run test and check coverage
$ jest --coverage
// run test and reset snapshot
$ jest -u

```
# Thoughts about it:

First time using snapshots and mocks in JS, it has been interesting to experiment with them. At time frustrating, but enjoyable.

Decide to keep it simple and clean while making less lines of code as possible.

Could implement an index.html file to run the program on a online server but time didn't allow. Very satisfied with the product and looking forward for ways to improve it.
