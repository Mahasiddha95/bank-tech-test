# bank-tech-test

```````````````

<h4>User Stories</h4>

As a customer, I would like to deposit money to my account, so i can store my money.

As a customer, I would like to withdraw from my account, so I can collect my money.

As a customer, I would like to see my statement, so I can see how much money i have in my account.

``````````````

<h4>Acceptance Criteria</h4>

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
